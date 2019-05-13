## Battleship game

### Description

Play vs AI or invite a friend to play 1v1.
Play single shot or salvo mode.

### ToDo

1. Day 1 => develop node server

- [ ] Set up express/db
- [ ] Install and configure socket.io
- [ ] Design flow for new game, invite friend, place ships
- [ ] Design flow for shot info relay to server/evaluation
- [ ] Set up win/lose conditions

2. Day 2 => develop front end

- [ ] Set up React App
- [ ] Style board/page layout
- [ ] Develop UI to receive board object and render updated state of game
- [ ] Hit/Miss/Sink Notification/Animation
- [ ] Test

3. Day 3 => connect client to server, develop logic

- [ ] Set up data exchange using socket.io
- [ ] Set up new game/join game screens

4. Day 4 => bug fix/testing coverage/ refactor

5. Day 5 => Polish/test/deploy

## Resources

#### General

1. https://en.wikipedia.org/wiki/Battleship_(game)

#### Stuff to Use

1. Node/Express
2. MongoDB
3. Socket.io (https://socket.io/get-started/chat/)

   -use Rooms for individual games (https://socket.io/docs/rooms-and-namespaces/#Rooms)

4. CRA
