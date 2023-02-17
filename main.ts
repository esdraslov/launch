namespace launch {
    //% block="launch with force %force"
    //% force.min=11 force.max=120
    export function launchForce(force: number){
        for(let i = 10; i = force; i++){
            servos.P0.setAngle(i)
            basic.pause(90)
        }
        servos.P0.setAngle(0)
    }
    //% block="launch with force %force"
    //% degs.min=20 degs.max=100
    export function launchDeg(degs: number){
        servos.P0.setAngle(degs)
        basic.pause(90)
        servos.P0.setAngle(0)
    }
}