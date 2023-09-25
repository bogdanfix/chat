const embedParent = document.getElementById('impact-embed-parent')
const scriptTag = document.currentScript

const chat = document.createElement('div')
chat.setAttribute('id', 'impact-embed-child')

chat.style.display = 'block'
chat.style.position = 'relative'
chat.style.width = '100%'
chat.style.height = '80vh'
chat.style.borderWidth = '1px'
chat.style.borderStyle = 'solid'
chat.style.borderColor = '#DDDDDD'

embedParent.appendChild(chat)

chat.innerHTML = `<iframe
src="https://getimpact.ai/chatbot/${scriptTag.id}/embed"
width="100%"
height="100%"
frameborder="0"
></iframe>`