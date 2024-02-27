import prompts from 'prompts'
import { paste } from 'copy-paste'
import { setAPIKey, setOpt } from './store.js'

export async function fetchAPIKey() {
    const apiKeyPrompt = await prompts({
        type: 'select',
        name: 'apiKeyMenu',
        message: 'Please enter your API key...',
        choices: [
            { title: '1. import from clipboard', value: 1 },
            { title: '2. Enter manually', value: 2 },
            { title: '3. Exit', value: 3 },
        ],
    })

    const apiKeyMenu = apiKeyPrompt.apiKeyMenu

    if (apiKeyMenu === 1) {
        const key = await paste()
        setAPIKey(key)
        console.log(`Your API key is: ${key}`)
        setOpt(1)
    } else if (apiKeyMenu === 2) {
        const apiKeyManual = await prompts({
            type: 'invisible',
            name: 'apiKey',
            message: 'Enter API key: ',
        })
        
        setAPIKey(apiKeyManual.apiKey)
        console.log(`Your API key is: ${apiKeyManual.apiKey}`)
        setOpt(1)
    } else if (apiKeyMenu === 3) {
        setOpt(-1)
    }
}

export async function displayMainMenu() {
    const mainMenuPrompt = await prompts({
        type: 'select',
        name: 'mainMenu',
        message: 'Select one of following Ways:',
        choices: [
            { title: '1. Send', value: 1, description: 'Send message using SMS, IVR, Messangers and Smart way' },
            { title: '2. Get Status', value: 2, description: 'Get status of specific message' },
            { title: '3. Verify', value: 3, description: 'Verify automatic OTPs' },
            { title: '4. Back', value: 4, description: 'Back to enter API key' },
            { title: '5. Exit', value: 5, description: 'Exit :(' },
        ]
    })

    switch (mainMenuPrompt.mainMenu) {
        case 1:
            setOpt(11)
            break
        case 2:
            setOpt(12)
            break
        case 3:
            setOpt(13)
            break
        case 4:
            setOpt(0)
            break
        case 5:
            setOpt(-1)
    }
}

export async function displaySendMenu() {
    const sendMenuPrompt = await prompts({
        type: 'select',
        name: 'sendMenu',
        message: 'How do you want to send a message?',
        choices: [
            { title: '1. SMS', value: 1, description: 'With some providers...' },
            { title: '2. Messanger', value: 2, description: 'Gap and IGap' },
            { title: '3. IVR', value: 3, description: 'IVR message...' },
            { title: '4. Smart', value: 4, description: 'Compact of SMS and Messanger method' },
            { title: '5. Back', value: 5, description: 'Back to main menu' },
            { title: '6. Exit', value: 6, description: 'Exit :(' },
        ]
    })

    switch (sendMenuPrompt.sendMenu) {
        case 1:
            setOpt(111)
            break
        case 5:
            setOpt(1)
            break
        case 6:
            setOpt(-1)
            break
    }

}

export async function displayProviderMenu() {
    const providerMenuPrompt = await prompts({
        type: 'select',
        name: 'providerMenu',
        message: 'Which provider do you want to send through?',
        choices: [
            { title: '1. 3000', value: 1, description: 'Magfa' },
            { title: '2. 2000', value: 2, description: 'Atie' },
            { title: '3. 9000', value: 3, description: 'Asiatech' },
            { title: '4. 50004', value: 4, description: 'Armaghan Rah Talaee' },
            { title: '5. Back', value: 5, description: 'Back to send menu' },
            { title: '6. Exit', value: 6, description: 'Exit' },
        ]
    })

    return providerMenuPrompt.providerMenu
}