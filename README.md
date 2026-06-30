# ALEX

### (i was going to wait until tmrw to write this but id rather write than code rn)

A very light NPM package for querying Minecraft servers for their status data, without needing to touch the underlying protocol yourself, and without relying on API calls.

Status? nothing. I just made the repo.

## Why

Getting Minecraft Server info is a pain in the ass, and while theres a few existing packages that do this, i'd rather have a simple npm one, especially that I can use in my other projects. The goal here is something deliberately simple, where anyone can just access a single top-level system that gives a normal javascript object back, for everyone who just want the data and don't care aout dealing with packet bs.

## what

- simple api —> like one function call, one resolved object, (no protocol knowledge should be required by the user integrating ts)
- should just work against any vanilla or modded server ootb (Zero configuration __required__ for servers)
- minimal dependencies if possible
- clear error handling

## how/when

- [ ] get a basic SLP handshake working with request/response statuses
- [ ] Handle all the TCP chunked/split responses correctly (this is gonna be a weird ass setup but its probavbly gonna be us just consistently buffering the data until a full packet received)
- [ ] uhhhhh get the rest done (do more research on this bs protocol and get the actual datta handling working fully between client and server. From there, i need to let the client porocess and read the JSON response since thats how SLP actually transmits server data iirc)
- [ ] set stuff up as an actual model. everything prior to this is just getting the system working with connecitng to the protocol and getting queryable access to servers through it.
- [ ] Publish to npm

## ok thats it goodnight.