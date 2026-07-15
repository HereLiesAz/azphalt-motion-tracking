
export function register(runtime) {
    runtime.registerFilter('vegas-motion-track', (canvas, frame, params) => {
        const ctx = canvas.getContext('2d'); ctx.putImageData(frame, 0, 0); ctx.strokeStyle = 'red'; ctx.lineWidth = 2; ctx.strokeRect(params.x || 100, params.y || 100, 50, 50);
    });
}
