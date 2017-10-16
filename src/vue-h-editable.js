
    var vueEditAble = {};
    vueEditAble.install = function (Vue, options) {
    
        Vue.directive('editable', {
            plaintextOnly:(options&&options.plaintextOnly)||false,
            bind:function(el,binding,vnode){
                var model = binding.value;
                binding.handler = function () {
                    var content = binding.def.plaintextOnly?el.innerText:el.innerHTML;
                    vnode.context.$data[binding.expression] = content;
                }.bind(this)
                el.addEventListener('input', binding.handler)
                el.innerHTML = binding.value || ''
            },
            inserted: function (el,binding) {
                if(binding.def.plaintextOnly){
                    el.setAttribute('contenteditable','plaintext-only');
                }
                else{
                    el.setAttribute('contenteditable',true);
                }
            },
            update: function (el,binding) {
                el.innerHTML = binding.value || ''
            },
            unbind: function (el,binding) {
                el.removeEventListener('input', binding.handler)
            }

        })
      }
      module.exports = vueEditAble;
