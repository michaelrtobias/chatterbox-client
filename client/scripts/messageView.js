var MessageView = {

  // Shawn note: should post message into chat room?
  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="text"><%= text %></div>
      </div>
    `)

};