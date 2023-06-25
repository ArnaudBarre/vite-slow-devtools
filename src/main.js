import * as items from './items.js';

const values = Object.values(items)
document.querySelector('#app').innerHTML = `
  <div>
    <p>Nb items: ${values.length}</p>
    <ul>
       ${values.join("\n")}
    </ul>
  </div>
`
