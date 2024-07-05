function changeText() {
    const paragraph = document.getElementById('change');
    paragraph.textContent = '<b>Text changed!<b>';
   
}
function changeContent() {
    const newContent = `
        <h2>New Heading</h2>
        <p>This is updated content using <strong>innerHTML</strong>.</p>
        <ul>
            <li>Always be happy</li>
            <li>Be positive</li>
            <li>Work smart</li>
        </ul>
    `;
    document.getElementById('content').innerHTML = newContent;
}
function changeColor()
{
    const coloring=document.getElementById('color');
    coloring.style.color="green";
}
function changeAttributes()
{
    const att=document.getElementById('myDiv');
    att.setAttribute('data-custom','hello');
}
function printAttribute() {
    const att = document.getElementById('myDiv');
    const attributeValue = att.getAttribute('data-custom');
    document.getElementById('output').textContent = attributeValue;
}