/* eslint-disable */
console.log('[WORKER]: worker thread loaded!')

onmessage = function handleMessage({ data }) {
    const { type } = data
    if (type === 'compute expression') {
        console.log(`[WORKER]: receive the expression: ${data.expression}`)
        let result = null
        try {
            result = eval(data.expression)
        } catch (error) {
            console.error('expression invalid')
        }

        if (result !== null) {
            postMessage({
                type: 'compute result over',
                result,
            })
        }
    } else if (type === 'close') {
        self.close()
        console.log('[WORKER]: worker closed...');
    }
}
