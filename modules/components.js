const Button = {
    icon: `
        <button class='btn btn-primary'>button</button>
        `,
    content: `
        <button class='btn btn-primary'><span contenteditable>button</span></button>
        `
}

const EmailForm = {
    icon: `
        <i class="bi bi-pencil-square"></i>
        <small>Email Form</small>
        `,
    content: `
        <div class='small mb-3 mx-2'>
            <label contenteditable for="inputEmail" class="form-label fw-bold">Email Adress</label>
            <input type="email" id="inputEmail" class="form-control form-control-sm" aria-describedby="emailHelpBlock">
            <div contenteditable id="emailHelpBlock" class="form-text">
                We'll never share your email with anyone else.
            </div>
        </div>
            `
}

const RadioForm = {
    icon: `
        <i class="bi bi-pencil-square"></i>
        <small>Radio Form</small>
        `,
    content: `
        <div class='small mb-3 mx-2'>
            <label contenteditable class="fw-bold">Have you ever used a computer before</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="radioDefault" id="radio1">
                <label contenteditable class="form-check-label" for="radio1">yes</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="radioDefault" id="radio2" checked>
                <label contenteditable class="form-check-label" for="radio2">No</label>
            </div>
        </div>
        `
}

const TextForm = {
    icon: `
        <i class="bi bi-pencil-square"></i>
        <small>Text Form</small>
        `,
    content: `
        <div class='small mb-3 mx-2'>
            <label contenteditable for="inputText" class="form-label fw-bold">Text form</label>
            <input type="text" id="inputText" class="form-control form-control-sm" aria-describedby="textHelpBlock">
            <div contenteditable id="textHelpBlock" class="form-text">
                enter your text here.
            </div>
        </div>
            `
}

const TextAreaForm = {
    icon: `
        <i class="bi bi-pencil-square"></i>
        <small>Text area Form</small>
        `,
    content: `
        <div class='small mb-3 mx-2'>
            <label contenteditable for="Textarea" class="form-label fw-bold">Text form</label>
            <textarea class="form-control" id="Textarea" rows="3"></textarea>
        </div>
            `
}

const Header = {
    icon: `
        <i class="bi bi-window-sidebar"></i>
        <small>Header</small>
        `,
    content: `
        <div class="bg-dark text-light p-2 mb-3">
            <h1 contenteditable class="dispay-4 small">Header</h1>
        </div>
        `
}

const Video = {
    icon: '<i class="bi bi-camera-video"></i>',
    content: `
            <video controls width="250">
                <source src="/media/cc0-videos/flower.webm" type="video/webm">
                <source src="/media/cc0-videos/flower.mp4" type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video>
            `
}

const Hr = {
    icon: `
            <i class="bi bi-hr"></i>
            <small>Divider</small>
            `,
    content: `<hr/ class='mx-2'>`
}

const Heading1 = {
    icon: `<i class="bi bi-type-h1"></i>`,
    content: `<h1 contenteditable>Heading 1</h1>`
}

const Heading2 = {
    icon: `<i class="bi bi-type-h2"></i>`,
    content: `<h2 contenteditable>Heading 2</h2>`
}

const Heading3 = {
    icon: `<i class="bi bi-type-h3"></i>`,
    content: `<h3 contenteditable>Heading 1</h3>`
}

const Text = {
    icon: '<i class="bi bi-justify"></i>',
    content: `<div contenteditable><p>Lorem Ipsum is
                     simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a 
                     type specimen book.
              </p><div>`
  }

const Image = {
    icon: '<i class="bi bi-image"></i>',
    content: '<img src="https://picsum.photos/100"/>'
  }



export {
    Button,
    EmailForm,
    RadioForm,
    TextForm,
    TextAreaForm,
    Header,
    Video,
    Hr,
    Heading1,
    Heading2,
    Heading3,
    Text,
    Image
}