class ScorePanels{
    score=0;
    level=1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //设置一个加分的方法
    addScore(){
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score % this.upScore === 0){
            this.levelUp();
        }
    }

    // 提升等级的方法
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }

    // 测试代码
    // const scorePanel = new ScorePanel(100, 2);
    // for(let i=0; i<200; i++){
    //     scorePanel.addScore();
    // }
}

export default ScorePanels;