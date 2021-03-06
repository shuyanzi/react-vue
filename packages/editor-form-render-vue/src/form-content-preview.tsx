import { computed, defineComponent, PropType, ref } from 'vue';
import { ModelValue } from './interfaces/model-value';
import { FormBlock } from './packages/form-block';
import { visualConfig } from './lib/config';
import { useModel } from './lib/useModel';

const FormContentPreview = defineComponent({
  name: 'FormContentPreview',
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
    const { modelValue } = props
    const dataModel = useModel(() => props.modelValue, val => ctx.emit('update:modelValue', val))
    const formData = ref(props.formData);

    const containerStyles = computed(() => ({
      width: `${modelValue.container.width}px`,
      height: `${modelValue.container.height}px`
    }))
    console.log({ modelValue })

    return () => {
      return (
        <div class='form-container' style={containerStyles.value}>
          vue component 来了~~~~
          {!!dataModel.value.blocks && (
            <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
              {
                dataModel.value.blocks.map((block, index) => (
                  <FormBlock
                    block={block}
                    key={index}
                    config={visualConfig}
                    formData={formData.value}
                    slots={ctx.slots}
                    customProps={props.customProps}
                    formDataChangeCb={props.formDataChangeCb}
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

export default FormContentPreview;