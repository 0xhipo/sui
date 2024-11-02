searchState.loadedDescShard("consensus_core", 0, "Digest of a consensus commit.\nIndex of a commit among all consensus commits.\nUniquely identifies a commit with its index and digest.\nThe output of consensus to execution is an ordered list of …\nExported consensus API. ConsensusAuthority is used by Sui …\nLexicographic min &amp; max digest.\nRound number of a block.\nExported API for testing. Creates fake blocks for testing. …\nExported API for testing. Sui transaction in serialised …\nIndex of a transaction in a block.\n<code>TransactionVerifier</code> implementation is supplied by Sui to …\nExported API for testing. VerifiedBlock allows full access …\nAll the committed blocks that are part of this sub-dag\nThe reference of the commit. First commit after genesis …\nFailed requests by route\nCounter of requests exceeding the “excessive” size …\nCounter of responses exceeding the “excessive” size …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGauge of the number of inflight requests at any given time …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA reference to the leader of the sub-dag\nThe number of closed connections frames for a peer …\nThe total number of congestion events for a peer …\nThe congestion window for a peer connection.\nThe connection status of known peers. 0 if not connected, …\nThe number of data blocked frames for a peer connection.\nNumber of disconnect events per peer.\nThe total number of lost bytes for a peer connection.\nThe total number of lost packets for a peer connection.\nFrameStats The number of max data frames for a peer …\nPathStats The rtt for a peer connection in ms.\nThe total number of packets sent for a peer connection.\nThe total number bytes observed by the UDP peer connection.\nUDPStats The total number datagrams observed by the UDP …\nThe total number transmits observed by the UDP peer …\nThe number of connected peers\nCreates a new committed sub dag.\nThis method is public for testing in other crates.\nReturns reference to the block.\nIndices of rejected transactions in each block.\nOptional scores that are provided as part of the consensus …\nRequest latency by route\nRequest size by route\nCounter of requests by route\nResponse size by route\nReceive buffer size of Anemo socket.\nSend buffer size of Anemo socket.\nSubmits a list of transactions to be sequenced. The method …\nThe timestamp of the commit, obtained from the timestamp …\n<code>ToString::to_string</code>, but without panic on OOM.\n<code>ToString::to_string</code>, but without panic on OOM.\n<code>ToString::to_string</code>, but without panic on OOM.\n<code>ToString::to_string</code>, but without panic on OOM.\n<code>ToString::to_string</code>, but without panic on OOM.\n<code>ToString::to_string</code>, but without panic on OOM.\nDetermines if this batch of transactions is valid. Fails …\nReturns indices of transactions to reject. Currently only …")