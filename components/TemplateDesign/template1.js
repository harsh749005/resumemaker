export const template = `
<html>
  <head>
    <style>
      body {
        margin: 1in; /* Word-like margins */
        font-family: 'Times New Roman';
        font-size: 12pt;
        color: #333;
      }

      h1 {
        margin: 0;
        font-size: 38pt;
        color: #000;
        font-weight: normal;
      }

      h2 {
        margin-top: 5px;
        font-size: 11pt;
        border-bottom: 1px solid #ccc;
        padding-bottom: 4px;
        color: #000;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 20px;
      }

      .info {
        display:flex;
        flex-direction:column;
        gap:1px;
        font-size: 12px;
        color: #555;
      }

      .contact {
        text-align: right;
        font-size: 10pt;
        line-height: 1.4;
      }

      ul {
        margin: 0px 0 0 -20px;
      }

      li {
        margin-bottom: 4px;
      }
    </style>
  </head>
  <body>
    <!-- Header -->
    <div class="header">
      <div>
        <h1>{{name}}</h1>
        <div class="info"><p>{{email}}</p><p>{{number}}</p></div>
      </div>
      <div class="contact">
        <div>{{links}}</div>
      </div>
    </div>



    <!-- Experience -->
    <h2>Experience</h2>
    <ul>
      {{experience}}
    </ul>

    <!-- Projects -->
    <h2>Projects</h2>
    <ul>
      {{projects}}
    </ul>

    <!-- Skills -->
    <h2>Skills</h2>
    <p>{{skills}}</p>

    <!-- Summary -->
    <h2>Summary of Qualification</h2>
    <p>{{summary}}</p>
    <!-- Education -->
    <h2>Education</h2>
    <ul>
      {{education}}
    </ul>
  </body>
</html>

`