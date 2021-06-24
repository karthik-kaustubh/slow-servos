function Gripper_arm (New_Position: number) {
    if (New_Position <= Gripper_Current_Position) {
        for (let index = 0; index <= Gripper_Current_Position - New_Position; index++) {
            maqueen.servoRun(maqueen.Servos.S2, Gripper_Current_Position - index)
            basic.pause(100)
        }
    } else {
        for (let index = 0; index <= New_Position - Gripper_Current_Position; index++) {
            maqueen.servoRun(maqueen.Servos.S2, Gripper_Current_Position + index)
            basic.pause(100)
        }
    }
    Gripper_Current_Position = New_Position
}
function Lift_Servo_Moter_Arm (New_Position: number) {
    if (New_Position <= Arm_Current_position) {
        for (let index = 0; index <= Arm_Current_position - New_Position; index++) {
            maqueen.servoRun(maqueen.Servos.S1, Arm_Current_position - index)
            basic.pause(100)
        }
    } else {
        for (let index = 0; index <= New_Position - Arm_Current_position; index++) {
            maqueen.servoRun(maqueen.Servos.S1, Arm_Current_position + index)
            basic.pause(100)
        }
    }
    Arm_Current_position = New_Position
}
let Gripper_Current_Position = 0
let Arm_Current_position = 0
let Arm_Bottom_position = 150
let Arm_Top_position = 30
Arm_Current_position = Arm_Bottom_position
Lift_Servo_Moter_Arm(50)
basic.pause(1000)
Lift_Servo_Moter_Arm(120)
let Gripper_Close_Position = 80
let Gripper_Open_position = 150
Gripper_Current_Position = Gripper_Close_Position
Gripper_arm(150)
basic.pause(1000)
Gripper_arm(90)
