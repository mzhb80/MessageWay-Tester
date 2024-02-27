let operation = 0
let apiKey = ''

export function getOpt() {
    return operation
}

/**
 * 
 * @param {number} opt 
 */
export function setOpt(opt) {
    operation = opt
}

export function getAPIKey() {
    return apiKey
}

/**
 * 
 * @param {string} key 
 */
export function setAPIKey(key) {
    apiKey = key
}