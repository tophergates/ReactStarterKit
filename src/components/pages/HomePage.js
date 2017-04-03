import React from 'react';

export default () => {
  return (
    <article>
      <p className='success'><strong>Success!</strong> You've setup a new project.<br />Happy coding.</p>
      <section>
        <h3>Scaffolding</h3>
        <p>I always dread the beginning stages of a new project. There's generally a tremendous amount of setup and configuration involved with setting up Webpack, Babel, SASS, Autoprefixer, Development Servers, blah, blah, blah!! Well, not anymore...</p>
        <p>Just grab the base project, make a few tweaks to your <code>package.json</code> and <code>webpack.config.js</code> files, and you're good to go.</p>
      </section>
      <section>
        <h3>ES2015 + Babel</h3>
        <p>Write modern ES2015 JavaScript syntax, which will be transpiled by Babel into JavaScript that all browsers can actually understand.</p>
        <p>Here is a terrible, no-good, example of using React with ES2015 classes, but hey it looks fancy:</p>
        <div>
          <code>
            <pre>{`import React, { Component } from 'react';\nimport '../styles/app.scss';\n\nexport default App extends Component {\n  state = { message: 'Hello there!' }\n\n  render() {\n    return (\n      <h1>{this.state.message}</h1>\n    )\n  }\n}`}</pre>
          </code>
        </div>
      </section>
      <section>
        <h3>Webpack 2.0</h3>
        <p>Your application will be tidied up into a nice bundle using Webpack 2.0. <em>Thanks Webpack!</em></p>
        <p>To bundle your files and create a distribution build, while in your project folder and in the terminal type:</p>
        <div><code><pre>$  npm run build</pre></code></div>
        <section>
          <h4>Dev Server</h4>
          <p>Using the built in <code>webpack-dev-server</code>, you can easily get started on mocking up your project with hot-reloading.</p>
          <p>While in your project directory and in the terminal, simply type:</p>
          <div><code><pre>$  npm run serve</pre></code></div>
          <p>Then point your favorite browser at: <em>localhost:8080</em></p>
        </section>
        <section>
          <h4>Codesplitting</h4>
          <p>Using codesplitting, vendor dependencies are bundled separately to take advantage of browser caching and speed up your application! Add your vendor dependencies inside the <code>webpack.config.js</code> file.</p>
          <p>You can futher utilize codesplitting in webpack if you wish inside of your React components or containers to intelligently load the chunks you need only when you need them.</p>
        </section>
        <section>
          <h4>Smart Ass Style Sheets (<code>SASS</code>)</h4>
          <p>SASS and SCSS stylesheets are converted to CSS and bundled together into one css file. This can speed up page loading speed by taking advantage of browser caching as well as fewer HTTP requests to the server.</p>
        </section>
        <section>
          <h4>Autoprefix</h4>
          <p>Define your target browsers inside the <code>package.json</code> file and autoprefixer will automatically determine which browser specific prefixes to add in your CSS to ensure browser compatibility with the most modern and bleeding edge CSS.</p>
        </section>
        <section>
          <h4>Distribution Build</h4>
          <p>When you're finished developing your application and are gearing up for deployment, creating a distribution build is simple:</p>
          <div><code><pre>$  npm run prod</pre></code></div>
        </section>
      </section>
    </article>
  )
}
