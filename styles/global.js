import {injectGlobal} from 'styled-components'
import {text, blue, gray} from 'constants/colors'
export default injectGlobal`
html {
  color: ${text};
  font-size: 100%;
}

* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  width: 100px;
  height: 24px;
  background: ${gray.medium};
  text-transform: uppercase;
  color: white;
  border-radius: 55px;
  user-select: none;
  cursor: pointer;
  font-size: 10px;


  :hover{
    background: #2380bf; /* Old browsers */
    background: -moz-linear-gradient(left, ${blue.dark} 0%, ${
  blue.medium
} 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, ${blue.dark} 0%,${
  blue.medium
} 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right, ${blue.dark} 0%,${
  blue.medium
} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }

  :focus {outline:0;}

  :disabled{
    opacity: 0.5;
    pointer-events: none;
  }
}
`
