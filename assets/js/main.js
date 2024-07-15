document.querySelector("#add_comment")?.addEventListener("submit", (event) => {
    event.preventDefault();
    let comment_email = document.querySelector("input#comment_email").value;
    let comment_text = document.querySelector("textarea#comment_text").value;

    let comment_el = document.createElement("div");
    comment_el.innerHTML = `
                <span class="text-justify">${comment_text}</span>
                <span class="text-gray-500 text-sm tracking-wider mt-2">${(new Date).toLocaleDateString()} | ${comment_email}</span>`;
    comment_el.classList.add(...("comment flex flex-col bg-slate-700 bg-opacity-[0.2] p-6 rounded-lg mb-4".split(" ")));

    document.querySelector(".commentary").appendChild(comment_el)
});


hljs.highlightAll();

const toolbarOptions = {
  container :[
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block' ],
    ['link', 'image', 'video', 'formula'],
  
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
  ],
    
};
  
  const quill = new Quill('#editor', {
    modules: {
      syntax: true,
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });

  Quill.register('modules/syntax', hljs);