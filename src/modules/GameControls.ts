// 引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanels from "./ScorePanels";

class GameControls{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanels;
    // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction: string = '';
    // 创建一个属性用来记录游戏是否结束
    isLive = true;

    constructor(){
        this.snake=new Snake();
        this.food=new Food();
        this.scorePanel=new ScorePanels(10,2);
        this.init();
    }

    // 游戏的初始化方法，调用后游戏即开始
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        // 需要检查event.key的值是否合法（用户是否按了正确的按键）
        // 修改direction属性
        this.direction = event.key;
    }

    // 创建一个控制蛇移动的方法
    run() {
        // 获取蛇现在坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键方向来修改X值和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }

        // 检查蛇是否吃到了食物
        this.checkEat(X, Y);

       //修改蛇的X和Y值
        try{
           this.snake.X = X;
           this.snake.Y = Y;
       }catch (e){
           // 进入到catch，说明出现了异常，游戏结束，弹出一个提示信息
           alert((<any>e).message+' GAME OVER!');
           // 将isLive设置为false
           this.isLive = false;
       }

       // 开启一个定时调用
       this.isLive && setTimeout(this.run.bind(this), 300 -(this.scorePanel.level-1)*30);

    }
       // 定义一个方法，用来检查蛇是否吃到食物
    checkEat(X: number, Y: number){
        if(X === this.food.X && Y === this.food.Y){
            // 食物的位置要进行重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇要增加一节
            this.snake.addBody();
        }
    }
}
export default GameControls;