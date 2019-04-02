import React from 'react'
import Layout from '../components/layout'
import Button from '../components/Button'
import { Projects } from '../components/Projects'

const IndexPage = () => (
  <Layout>
    <div className="nes-container with-title">
      <p className="title">Text</p>

      <span className="nes-text is-primary">Primary</span>
      <span className="nes-text is-success">Success</span>
      <span className="nes-text is-warning">Warning</span>
      <span className="nes-text is-error">Error</span>
      <span className="nes-text is-disabled">Disabled</span>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Buttons</p>

      <Button>Normal</Button>
      <Button variant='primary'>Primary</Button>
      <Button variant='success'>Success</Button>
      <Button variant='warning'>Warning</Button>
      <Button variant='error'>Error</Button>
      <Button variant='disabled'>Disabled</Button>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Radios</p>

      <label>
        <input type="radio" className="nes-radio" name="answer" checked/>
        <span>Yes</span>
      </label>

      <label>
        <input type="radio" className="nes-radio" name="answer"/>
        <span>No</span>
      </label>
      <div style={{ backgroundColor: '#212529', padding: '1rem 0' }}>
        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" checked/>
          <span>Yes</span>
        </label>

        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark"/>
          <span>No</span>
        </label>
      </div>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Checkboxes</p>

      <label>
        <input type="checkbox" className="nes-checkbox" checked/>
        <span>Enable</span>
      </label>

      <div style={{ backgroundColor: '#212529', padding: '1rem 0' }}>
        <label>
          <input type="checkbox" className="nes-checkbox is-dark" checked/>
          <span>Dark</span>
        </label>
      </div>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Inputs</p>

      <div className="nes-field">
        <label htmlFor="name_field">Your name</label>
        <input type="text" id="name_field" className="nes-input"/>
      </div>

      <div className="nes-field is-inline">
        <label htmlFor="inline_field">.input.is-success</label>
        <input type="text" id="inline_field" className="nes-input is-success" placeholder="NES.css"/>
      </div>

      <div className="nes-field is-inline">
        <label htmlFor="warning_field">.input.is-warning</label>
        <input type="text" id="warning_field" className="nes-input is-warning" placeholder="8bit.css"/>
      </div>

      <div className="nes-field is-inline">
        <label htmlFor="error_field">.input.is-error</label>
        <input type="text" id="error_field" className="nes-input is-error" placeholder="awesome.css"/>
      </div>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Textarea</p>

      <label htmlFor="textarea_field">Textarea</label>
      <textarea id="textarea_field" className="nes-textarea"/>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Textarea</p>
      <label htmlFor="default_select">Default select</label>
      <div className="nes-select">
        <select required id="default_select">
          <option value="" disabled selected hidden>Select...</option>
          <option value="0">To be</option>
          <option value="1">Not to be</option>
        </select>
      </div>

      <label htmlFor="success_select">nes-select.is-success</label>
      <div className="nes-select is-success">
        <select required id="success_select">
          <option value="" disabled selected hidden>Select...</option>
          <option value="0">To be</option>
          <option value="1">Not to be</option>
        </select>
      </div>

      <label htmlFor="warning_select">nes-select.is-warning</label>
      <div className="nes-select is-warning">
        <select required id="warning_select">
          <option value="" disabled selected hidden>Select...</option>
          <option value="0">To be</option>
          <option value="1">Not to be</option>
        </select>
      </div>

      <label htmlFor="error_select">nes-select.is-error</label>
      <div className="nes-select is-error">
        <select required id="error_select">
          <option value="" disabled selected hidden>Select...</option>
          <option value="0">To be</option>
          <option value="1">Not to be</option>
        </select>
      </div>
    </div>


    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Containers</p>

      <div className="nes-container with-title is-centered">
        <p className="title">Container.is-centered</p>
        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>

      <div className="nes-container is-dark with-title">
        <p className="title">Container.is-dark</p>
        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>

      <div className="nes-container is-rounded">
        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>

      <div className="nes-container is-rounded is-dark">
        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Dialogs</p>

      <section>
        <button type="button" className="nes-btn is-primary"
                onClick="document.getElementById('dialog-default').showModal();">
          Open dialog
        </button>
        <dialog className="nes-dialog" id="dialog-default">
          <form method="dialog">
            <p className="title">Dialog</p>
            <p>Alert: this is a dialog.</p>
            <menu className="dialog-menu">
              <button className="nes-btn">Cancel</button>
              <button className="nes-btn is-primary">Confirm</button>
            </menu>
          </form>
        </dialog>
      </section>

      <section>
        <button type="button" className="nes-btn is-primary"
                onClick="document.getElementById('dialog-dark').showModal();">
          Open dark dialog
        </button>
        <dialog className="nes-dialog is-dark" id="dialog-dark">
          <form method="dialog">
            <p className="title">Dark dialog</p>
            <p>Alert: this is a dialog.</p>
            <menu className="dialog-menu">
              <button className="nes-btn">Cancel</button>
              <button className="nes-btn is-primary">Confirm</button>
            </menu>
          </form>
        </dialog>
      </section>

      <section>
        <button type="button" className="nes-btn is-primary"
                onClick="document.getElementById('dialog-rounded').showModal();">
          Open rounded dialog
        </button>
        <dialog className="nes-dialog is-rounded" id="dialog-rounded">
          <form method="dialog">
            <p className="title">Rounded dialog</p>
            <p>Alert: this is a dialog.</p>
            <menu className="dialog-menu">
              <button className="nes-btn">Cancel</button>
              <button className="nes-btn is-primary">Confirm</button>
            </menu>
          </form>
        </dialog>
      </section>

      <section>
        <button type="button" className="nes-btn is-primary"
                onClick="document.getElementById('dialog-dark-rounded').showModal();">
          Open dark and rounded dialog
        </button>
        <dialog className="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
          <form method="dialog">
            <p className="title">Dark and Rounded dialog</p>
            <p>Alert: this is a dialog.</p>
            <menu className="dialog-menu">
              <button className="nes-btn">Cancel</button>
              <button className="nes-btn is-primary">Confirm</button>
            </menu>
          </form>
        </dialog>
      </section>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Lists</p>

      <div className="lists">
        <ul className="nes-list is-disc">
          <li>Good morning.</li>
          <li>Thou hast had a good night's sleep, I hope.</li>
          <li>Thou hast had a good afternoon</li>
          <li>Good night.</li>
        </ul>
      </div>

      <div className="lists">
        <ul className="nes-list is-circle">
          <li>Good morning.</li>
          <li>Thou hast had a good night's sleep, I hope.</li>
          <li>Thou hast had a good afternoon</li>
          <li>Good night.</li>
        </ul>
      </div>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Tables</p>

      <div className="nes-table-responsive">
        <table className="nes-table is-bordered is-centered">
          <thead>
          <tr>
            <th>Table.is-bordered</th>
            <th>Table.is-centered</th>
            <th>Table.is-centered</th>
            <th>Table.is-centered</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Thou hast had a good morning</td>
            <td>Thou hast had a good afternoon</td>
            <td>Thou hast had a good evening</td>
            <td>Thou hast had a good night</td>
          </tr>
          <tr>
            <td>Thou hast had a good morning</td>
            <td>Thou hast had a good afternoon</td>
            <td>Thou hast had a good evening</td>
            <td>Thou hast had a good night</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className="nes-table-responsive">
        <table className="nes-table is-bordered is-dark">
          <thead>
          <tr>
            <th>Table.is-dark</th>
            <th>Table.is-bordered</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Thou hast had a good morning</td>
            <td>Thou hast had a good afternon</td>
          </tr>
          <tr>
            <td>Thou hast had a good morning</td>
            <td>Thou hast had a good afternoon</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Progress</p>

      <progress className="nes-progress" value="90" max="100"/>
      <progress className="nes-progress is-primary" value="80" max="100"/>
      <progress className="nes-progress is-success" value="50" max="100"/>
      <progress className="nes-progress is-warning" value="30" max="100"/>
      <progress className="nes-progress is-error" value="10" max="100"/>
      <progress className="nes-progress is-pattern" value="50" max="100"/>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Avatars</p>

      <img className="nes-avatar" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15"
           style={{ imageRendering: 'pixelated' }}/>
      <img className="nes-avatar is-small" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15"
           style={{ imageRendering: 'pixelated' }}/>
      <img className="nes-avatar is-medium" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15"
           style={{ imageRendering: 'pixelated' }}/>
      <img className="nes-avatar is-large" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15"
           style={{ imageRendering: 'pixelated' }}/>
      <img className="nes-avatar is-rounded" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15"
           style={{ imageRendering: 'pixelated' }}/>
      <img className="nes-avatar is-rounded is-small" alt="Gravatar image example"
           src="https://www.gravatar.com/avatar?s=15" style={{ imageRendering: 'pixelated' }}/>
      <img className="nes-avatar is-rounded is-medium" alt="Gravatar image example"
           src="https://www.gravatar.com/avatar?s=15" style={{ imageRendering: 'pixelated' }}/>
      <img className="nes-avatar is-rounded is-large" alt="Gravatar image example"
           src="https://www.gravatar.com/avatar?s=15" style={{ imageRendering: 'pixelated' }}/>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Balloons</p>

      <section className="message-list">
        <section className="message -left">
          <i className="nes-bcrikko"/>
          <div className="nes-balloon from-left">
            <p>Hello world</p>
          </div>
        </section>

        <section className="message -right">
          <div className="nes-balloon from-right">
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
          </div>
          <i className="nes-bcrikko"/>
        </section>
      </section>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Badges</p>

      <a href="#" className="nes-badge">
        <span className="is-dark">NES.css</span>
      </a>

      <a href="#" className="nes-badge">
        <span className="is-primary">is</span>
      </a>

      <a href="#" className="nes-badge">
        <span className="is-success">a</span>
      </a>

      <a href="#" className="nes-badge">
        <span className="is-warning">great</span>
      </a>

      <a href="#" className="nes-badge">
        <span className="is-error">framework!</span>
      </a>

      <a href="#" className="nes-badge is-splited">
        <span className="is-dark">npm</span>
        <span className="is-primary">1.1.0</span>
      </a>

      <a href="#" className="nes-badge is-splited">
        <span className="is-dark">test</span>
        <span className="is-success">100%</span>
      </a>

      <a href="#" className="nes-badge is-icon">
        <span className="is-warning"><i className="nes-icon star is-small"/></span>
        <span className="is-primary">Icons</span>
      </a>

      <a href="#" className="nes-badge is-icon">
        <span className="is-dark">hi</span>
        <span className="is-warning">Text</span>
      </a>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Reaction-icons</p>

      <section className="icon-list">
        <i className="nes-icon is-large heart"/>
        <i className="nes-icon is-large heart is-empty"/>
        <i className="nes-icon is-large star"/>
        <i className="nes-icon is-large star is-half"/>
        <i className="nes-icon is-large star is-transparent"/>
        <i className="nes-icon is-large star is-empty"/>
        <i className="nes-icon is-large like"/>
        <i className="nes-icon is-large like is-empty"/>
      </section>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Sns-icons</p>

      <section className="icon-list">
        <i className="nes-icon twitter is-large"/>
        <i className="nes-icon facebook is-large"/>
        <i className="nes-icon instagram is-large"/>
        <i className="nes-icon github is-large"/>
        <i className="nes-icon google is-large"/>
        <i className="nes-icon gmail is-large"/>
        <i className="nes-icon medium is-large"/>
        <i className="nes-icon linkedin is-large"/>
        <i className="nes-icon twitch is-large"/>
        <i className="nes-icon youtube is-large"/>
        <i className="nes-icon reddit is-large"/>
        <i className="nes-icon whatsapp is-large"/>
      </section>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Other-icons</p>
      <section className="icon-list">
        <i className="nes-icon close is-large"/>
        <i className="nes-icon trophy is-large"/>
        <i className="nes-icon coin is-large"/>
      </section>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Pixel-arts</p>
      <section className="icon-list">
        <i className="nes-logo"/>
        <i className="nes-jp-logo"/>
        <i className="snes-logo"/>
        <i className="snes-jp-logo"/>
        <i className="nes-octocat animate"/>
        <i className="nes-smartphone"/>
        <i className="nes-phone"/>
      </section>
    </div>

    <div className="nes-container with-title" style={{ marginTop: '2.5rem' }}>
      <p className="title">Nintendo-characters</p>
      <section className="icon-list">
        <i className="nes-mario"/>
        <i className="nes-ash"/>
        <i className="nes-pokeball"/>
        <i className="nes-bulbasaur"/>
        <i className="nes-charmander"/>
        <i className="nes-squirtle"/>
        <i className="nes-kirby"/>
      </section>
    </div>

    <Projects/>
  </Layout>
)

export default IndexPage
