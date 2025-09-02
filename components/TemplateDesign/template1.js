export const template = `
<html>
  <head>
    <style>
      body {
        margin: 1in; /* Word-like margins */
        font-family: Arial, sans-serif;
        font-size: 12pt;
        color: #333;
      }

      h1 {
        margin: 0;
        font-size: 28pt;
        font-weight: bold;
        color: #2c3e50;
      }

      h2 {
        margin-top: 24px;
        font-size: 16pt;
        border-bottom: 1px solid #ccc;
        padding-bottom: 4px;
        color: #2c3e50;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 20px;
      }

      .title {
        font-size: 14pt;
        color: #555;
      }

      .contact {
        text-align: right;
        font-size: 10pt;
        line-height: 1.4;
      }

      ul {
        margin: 4px 0 0 20px;
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
        <div class="title">{{title}}</div>
      </div>
      <div class="contact">
        <div>{{email}}</div>
        <div>{{phone}}</div>
        <div>{{linkedin}}</div>
        <div>{{github}}</div>
      </div>
    </div>

    <!-- Summary -->
    <h2>Summary of Qualification</h2>
    <p>{{summary}}</p>

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

    <!-- Education -->
    <h2>Education</h2>
    <ul>
      {{education}}
    </ul>
  </body>
</html>

`