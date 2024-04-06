import * as dispatcherAbi from "../abi/dispatcher";

export let topics = [
  dispatcherAbi.events.OpenIbcChannel.topic,
  dispatcherAbi.events.ConnectIbcChannel.topic,
  dispatcherAbi.events.CloseIbcChannel.topic,
  dispatcherAbi.events.SendPacket.topic,
  dispatcherAbi.events.RecvPacket.topic,
  dispatcherAbi.events.WriteAckPacket.topic,
  dispatcherAbi.events.WriteTimeoutPacket.topic,
  dispatcherAbi.events.Timeout.topic,
  dispatcherAbi.events.Acknowledgement.topic,
];