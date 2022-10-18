const Button = {
    icon: `
        <button class='btn btn-primary'>button</button>
        `,
    content: `
        <button class='btn btn-primary'>button</button>
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
        <small>Text Area Form</small>
        `,
    content: `
        <div class='small mb-3 mx-2'>
            <label contenteditable for="Textarea" class="form-label fw-bold">Text Area form</label>
            <textarea class="form-control" id="Textarea" rows="3"></textarea>
        </div>
            `  
}

const Header = {
    icon: `header`,
    content: `
        <div class="bg-dark text-light p-2 mb-3">
            <h1 contenteditable class="dispay-4 small">Header</h1>
        </div>
        `
}


export { Button, EmailForm, RadioForm, TextForm, TextAreaForm, Header }