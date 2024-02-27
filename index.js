import prompts from 'prompts';
import { MessageWay, isMessageWayError } from 'messageway';
import {
  fetchAPIKey,
  displayMainMenu,
  displaySendMenu,
  displayProviderMenu,
} from './utils.js';
import { getOpt } from './store.js'

// const msg = new MessageWay()

(async () => {

  while (getOpt() !== -1) {
    const opt = getOpt()

    switch (opt) {
        case 0:
            await fetchAPIKey()
            break
        case 1:
            await displayMainMenu()
            break
        case 11:
            await displaySendMenu()
            break
        case 111:
            await displayProviderMenu()
            break
        default:
            break
    }
  }

  // console.log(paste());
})();
