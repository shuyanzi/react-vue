import { computed, defineComponent, PropType, ref } from 'vue';
import { ModelValue } from './interfaces/model-value';
import { FormBlock } from './packages/form-block';
import { visualConfig } from './lib/config';
import { useModel } from './lib/useModel';
import { Rules } from 'async-validator'

const FormContent = defineComponent({
  name: 'AFormContent',
  props: {
    modelValue: {type: Object as PropType<ModelValue>, required: true},
    formData: { type: Object as PropType<Record<string, any>>, required: true },
    // 自定义事件
    customProps: { type: Object as PropType<Record<string, any>> },
    formDataChangeCb: { type: Function, required: true }
  },
  emits: {
    'update:modelValue': (val?: ModelValue) => true,
  },
  setup(props, ctx) {
    const { modelValue, formData, customProps, formDataChangeCb } = props
    const dataModel = useModel(() => modelValue, val => ctx.emit('update:modelValue', val))
    formData['formRef'] = ref();
    const data = ref(formData);
    const rules: Rules = {}

    const containerStyles = computed(() => ({
      width: `${modelValue.container.width}px`,
      height: `${modelValue.container.height}px`
    }))
    dataModel.value.blocks.forEach((block) => {
      const modelName = !block?.model ? null : block?.model.modelValue || block?.model.default || null;
      const rule = !block?.rules ? null : block?.rules;
      if (modelName && rule) {
        rules[modelName] = JSON.parse(JSON.stringify(rule))
      }
    })
    console.log({ rules })

    return () => {
      return (
        <div class='form-container' style={containerStyles.value}>
          vue component 来了~~~~
          {!!dataModel.value.blocks && (
            <el-form model={data.value} rules={rules} ref={formData['formRef']} label-width="100px" class="demo-ruleForm">
              {
                dataModel.value.blocks.map((block, index) => (
                  <FormBlock
                    block={block}
                    key={index}
                    config={visualConfig}
                    formData={data.value}
                    slots={ctx.slots}
                    customProps={customProps}
                    formDataChangeCb={formDataChangeCb}
                    // {...{
                    //   onMousedown: (e: MouseEvent) =>
                    //     focusHandler.block.onMousedown(e, block, index),
                    //   onContextmenu: (e: MouseEvent) =>
                    //     handler.onContextmenuBlock(e, block),
                    // }}
                  />
                ))
              }
            </el-form>
          )}
        </div>
      );
    };
  },
});

export default FormContent;