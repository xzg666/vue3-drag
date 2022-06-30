import {ElButton,ElInput} from 'element-plus' 

function MaterialCreater(){
    this.materialList = []
    this.materialMap = {}
}

MaterialCreater.prototype.add = function(material){
    if(!material.key) return console.error('material is not valid')
    this.materialList.push(material)
    this.materialMap[material.key] = material
}

export const materials = new MaterialCreater()

materials.add({
    key: "text",
    preRender: () => <span>文本物料</span>,
    render: () => <span>文本组件</span>
});

materials.add({
    key: 'button',
    preRender: () => <ElButton>按钮物料</ElButton>,
    render: () => <ElButton>按钮组件</ElButton>
});

materials.add({
    key:'input',
    preRender: () => <ElInput placeholder="输入框物料" />,
    render: () => <input placeholder="输入框组件" />
})