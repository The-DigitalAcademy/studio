const ELEMENTS = {
    Button: {
        icon: `
        <button class='btn btn-primary'>button</button>
        `,
        content: `
        <button class='btn btn-primary d-block' contenteditable>Button</button>
        `,
        editingToolList: ['horizontalAlign', 'bgColor', 'textColor']
    },

    EmailForm: {
        icon: `
        <i class="bi bi-pencil-square"></i>
        <small>Email Form</small>
        `,
        content: `
        <div class='small mb-3 mx-1'>
            <label contenteditable for="inputEmail" class="form-label fw-bold">Email Adress</label>
            <input type="email" id="inputEmail" class="form-control form-control-sm" aria-describedby="emailHelpBlock">
            <div contenteditable id="emailHelpBlock" class="form-text">
                We'll never share your email with anyone else.
            </div>
        </div>
            `,
        editingToolList: ['textAlign', 'textColor'],
        actionToolList: ['getMsisdn', 'getCountry', 'getLanguage']
    },

    PhoneForm: {
        icon: `
        <i class="bi bi-telephone-fill"></i>
        <small>Phone Form</small>
        `,
        content: `
        <div class='small mb-3 mx-1'>
            <label contenteditable for="inputPhone" class="form-label fw-bold">Phone Number</label>
            <input type="tel" id="inputPhone" class="form-control form-control-sm" aria-describedby="phoneHelpBlock">
            <div contenteditable id="phoneHelpBlock" class="form-text">
                We will not share your phone number with anyone else.
            </div>
        </div>
            `,
        editingToolList: ['textAlign', 'textColor'],
        actionToolList: ['getMsisdn']
    },

    RadioForm: {
        icon: `
        <i class="bi bi-pencil-square"></i>
        <small>Radio Form</small>
        `,
        content: `
        <div class='small mb-3 mx-1'>
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
        `,
        editingToolList: ['textAlign', 'textColor']
    },

    TextForm: {
        icon: `
        <i class="bi bi-pencil-square"></i>
        <small>Text Form</small>
        `,
        content: `
        <div class='small mb-3 mx-1'>
            <label contenteditable for="inputText" class="form-label fw-bold">Text form</label>
            <input type="text" id="inputText" class="form-control form-control-sm" aria-describedby="textHelpBlock">
            <div contenteditable id="textHelpBlock" class="form-text">
                enter your text here.
            </div>
        </div>
            `,
        editingToolList: ['textAlign', 'textColor'],
        actionToolList: ['getCountry', 'getLanguage']
    },

    TextAreaForm: {
        icon: `
        <i class="bi bi-pencil-square"></i>
        <small>Text area Form</small>
        `,
        content: `
        <div class='small mb-3 mx-1'>
            <label contenteditable for="Textarea" class="form-label fw-bold">Text form</label>
            <textarea class="form-control" id="Textarea" rows="3"></textarea>
        </div>
            `,
        editingToolList: ['textAlign', 'padding', 'textColor']
    },

    Header: {
        icon: `
        <i class="bi bi-window-sidebar"></i>
        <small>Header</small>
        `,
        content: `
        <div style="background-color:#212529;color:#f8f9fa;" class="p-2">
            <h1 contenteditable class="dispay-4 small">Header</h1>
        </div>
        `,
        editingToolList: ['textAlign', 'bgColor', 'textColor', 'border']
    },

    Video: {
        icon: '<i class="bi bi-camera-video"></i>',
        content: `
            <video controls width="250">
                <source src="/media/cc0-videos/flower.webm" type="video/webm">
                <source src="/media/cc0-videos/flower.mp4" type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video>
            `,
        editingToolList: ['']
    },

    Hr: {
        icon: `
            <i class="bi bi-hr"></i>
            <small>Divider</small>
            `,
        content: `<hr/ class='mx-1'>`,
        editingToolList: ['padding']
    },

    Heading1: {
        icon: `<i class="bi bi-type-h1"></i>`,
        content: `<h1 contenteditable>Heading 1</h1>`,
        editingToolList: ['textAlign', 'padding', 'textColor', 'border']
    },

    Heading2: {
        icon: `<i class="bi bi-type-h2"></i>`,
        content: `<h2 contenteditable>Heading 2</h2>`,
        editingToolList: ['textAlign', 'padding', 'textColor', 'border']
    },

    Heading3: {
        icon: `<i class="bi bi-type-h3"></i>`,
        content: `<h3 contenteditable>Heading 1</h3>`,
        editingToolList: ['textAlign', 'padding', 'textColor', 'border']
    },

    Text: {
        icon: '<i class="bi bi-justify"></i>',
        content: `<p contenteditable>Lorem Ipsum is
                     simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a 
                     type specimen book.
              </p>`,
        editingToolList: ['textAlign', 'padding', 'textColor', 'border']
    },

    Image: {
        icon: '<i class="bi bi-image"></i>',
        content: '<img class="d-block" src="https://picsum.photos/100"/>',
        editingToolList: ['imageUrl', 'imageSize', 'horizontalAlign', 'padding', 'bgColor', 'border']
    }
}


export default ELEMENTS