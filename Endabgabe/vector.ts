namespace Galaxy {

    export class Vector {
        x: number;
        y: number;
        

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
            
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        copy(): Vector {
            return new Vector(this.x, this.y);
    }
}}