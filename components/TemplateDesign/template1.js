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
        font-family: 'Times New Roman';
      }

      h2 {
        margin-top: 5px;
        font-size: 11pt;
        border-bottom: 1px solid #ccc;
        padding-bottom: 4px;
        color: #000;
        font-family: 'Times New Roman';
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 20px;
        font-family: 'Times New Roman';
      }

      .info {
        display:flex;
        flex-direction:column;
        gap:1px;
        font-size: 12px;
        color: #555;
        height:60px;
        background-color: coral;
        font-family: 'Times New Roman';
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
        <div class="info">
        <p style="font-family: 'Times New Roman';">{{email}}</p>
        <p style="font-family: 'Times New Roman';margin-bottom:15px">{{number}}</p>
        </div>
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