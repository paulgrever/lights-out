var specs = require.context('./test', true, /(_t|T)est\.js$/);
specs.keys().forEach(specs);
