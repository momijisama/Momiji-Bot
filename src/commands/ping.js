module.exports =
{
  name: "ping",
  description: "pong",
  execute(client, client_permissions, message, args)
  {
    if(client_permissions.has("SEND_MESSAGES"))
    {
      message.channel.send("pong").catch(console.error);
    }
  }
}