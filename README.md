# chatterpod
LoginForm: This component is responsible for user authentication. If there's no username stored in the browser's local storage, it renders the login form.
ChatEngine: This component is the core of the chat application. It's provided with several props:
height: Sets the height of the chat interface to 100% of the viewport height.
projectID: Specifies the Chat Engine project ID, which is used for authentication.
userName and userSecret: These credentials are used to log in to the Chat Engine.
renderChatFeed: A function that customizes the chat feed's rendering by spreading chatAppProps to the ChatFeed component.
onNewMessage: Plays an audio notification when a new message arrives.
ChatFeed: This component is responsible for rendering the chat messages and feeds.

The app follows a simple flow: If a username isn't stored in local storage, it renders the login form. Once a user is authenticated, the Chat Engine component creates a chat interface, allowing the user to interact with the chat feed. The ChatFeed component handles the rendering of messages within this interface. Additionally, it plays an audio notification when a new message is received.





