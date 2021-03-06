/* eslint-disable no-empty-function */
/* eslint-disable brace-style */
/* eslint-disable no-unused-vars */
import React, { Component, useEffect, useState, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
import Peer from "simple-peer";
import Stream from "./Stream";
import { useHistory } from "react-router-dom";
import logoBlueGreen from '../assets/logoBlueGreen.png';
import "./VideoChat.css";

function VideoChat({ firstName, lastName, isDoctor }) {
  const [userName, setUserName] = useState("");
  const [docList, setDocList] = useState([]);
  const [facility, setFacility] = useState(null);
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const docElement = useRef(null);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();
  const peer = useRef(
  );

  // get doctors for docList
  useEffect(() => {
    axios.get('/doctors')
      .then(res => {
        setDocList(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  // establish connection from client to server
  useEffect(() => {
    socket.current = io.connect("/");
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    });
    socket.current.on("yourID", (id) => {
      setYourID(id);
    });
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    });
    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, []);

  // call peer/ go to doctor
  function callPeer(id) {
    // calls peer id
    peer.current = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.current.on("signal", data => {
      socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID });
    });
    peer.current.on("stream", stream => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });
    // set peer to true to accept call
    socket.current.on("callAccepted", signal => {
      setCallAccepted(true);
      peer.current.signal(signal);
      socket.current.off("signal");
    });
  }

  // accept call / go to user
  function acceptCall(event) {
    event.preventDefault();
    setReceivingCall(false);
    setCallAccepted(true);
    peer.current = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    // called peer
    peer.current.on("signal", data => {
      socket.current.emit("acceptCall", { signal: data, to: caller });
    });
    peer.current.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.current.signal(callerSignal);
  }

  let UserVideo;
  if (stream) {
    UserVideo = (
      <video className="uservideo" playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <video className="partnervideo" playsInline ref={partnerVideo} autoPlay />
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div className="row justify-content-center">
        <button className="acceptCall col-sm-12 col-md-6 col-lg-4" onClick={acceptCall}>ACCEPT CALL</button>
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { firstName, lastName, facility };

    socket.current.on(facility, (data) => { callPeer(data); });
    socket.current.emit("join-room", ({ firstName, userName, facility }));
  };

  // handles the hang up. redirects to the homepage.
  let history = useHistory();

  function handleHangup(event) {
    event.preventDefault();
    setStream(null);
    stream.getTracks().forEach(function (track) {
      track.stop();
    });
    history.push("/");
  }

  const handleFacilityChange = ev => { console.log(docElement.current.value); setFacility(docElement.current.value); };

  return (
    <div>

    <div className="loginIntro">
            <img src={logoBlueGreen} alt="Girl in a jacket" width="20%" height="20%" className="aboutlogo"></img>
            <h1 id="welcomeHomepg">Video Chat</h1>
          </div>
    <section className="hero light ">
      <div className="hero-body">
        <div className="container-fluid">
          {/* <div className="columns ">
            <div className="column">
              <span className="icon is-large">
                <i className="fa fa-comments"></i>
              </span>
            </div>
          </div> */}
          <div className="row container-fluid m-0">

            <div className="col-12 container-fluid">
              <form action="/videochat" className="box col-12">
                <div className="field">
                  {/* <p className="control col-12"> */}
                    <select name="room" className="roomselect col-sm-10 col-md-6" placeholder="Room Name"
                      value={facility || ""}
                      onChange={handleFacilityChange}
                      ref={docElement} >
                      <option >Select your Veterinarian</option>
                      {docList.map(doctor =>
                        <option key={doctor._id} value={doctor.facility}>Dr. {doctor.firstName} {doctor.lastName} at {doctor.facility}</option>

                      )}
                    </select>

                    <button onClick={handleSubmit} className="button joinBtn">
                      {/* <span className="icon is-small is-left mr-1">
                      <i className="fas fa-person-booth"></i>
                    </span> */}
                      JOIN
                    </button>
                    {/* <!-- <input type="text" placeholder="Room Name" className="input" name="room" required> --></input> */}

                    <span className="icon is-small is-left">
                      <i className="fas fa-comment-alt"></i>
                    </span>
                  {/* </p> */}
                </div>
                <div className="field ">
                  <div className="container-fluid">
                    <Stream firstName={firstName} lastName={lastName} UserVideo={UserVideo} PartnerVideo={PartnerVideo} incomingCall={incomingCall} handleHangup={handleHangup} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}

export default VideoChat;