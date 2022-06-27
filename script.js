import { Register } from "./class/register.js";
import { Login } from "./class/login.js";
const root = document.getElementById("root");
const register = new Register('ajarek@poczta.onet.pl', 'hasło');
const login = new Login('ajarek@poczta.onet.pl', 'hasło')

root.append(register.render(), login.render());
