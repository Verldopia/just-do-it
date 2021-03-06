export default {
  button(method, action, classy, type, text) {
    return `
        <form method="${method}" action="${action}">
            <button class="${classy}" type="${type}">${
      text !== '[object Object]' ? text : ''
    }</button>
        </form>`;
  },
  length(taskData, boolean, state) {
    const task = taskData.filter((t) => t.checked === boolean);
    return `
        <h3 class="p--pending">You have ${
          task.length === 0 ? 'no' : task.length
        } ${state} task${task.length === 1 ? '' : 's'}</h3>
        `;
  },
  capital(text) {
    return text[0].toUpperCase() + text.slice(1);
  },
};
