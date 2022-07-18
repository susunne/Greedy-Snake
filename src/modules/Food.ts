class Food{
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;

    // 获取页面中的food元素并将其赋值给element
    constructor(){
        this.element = document.getElementById('food')!;
    }

    // 定义一个获取食物X轴、Y轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }

    // 食物的位置最小是0 最大是290
    // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10
    change(){
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }

    // 测试代码
    // const food =  new Food();
    // console.log(food.X, food.Y);
    // food.change();
    // console.log(food.X, food.Y);
}

export default Food;