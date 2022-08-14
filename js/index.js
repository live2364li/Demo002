window.onload = function() {
                //  思路
                //  1。先获取路径导航的元素
                //  2再获取所需要的数据
                //  3由于数据是需要动态产生的那么相应的dom元素应该也是动态产生的，含义需要创建dom元素，根源数据的数量来创建dom元素
                //  4在遍历数据创建dom元素的最后一条只创建a标签，而不创建i标签

                // 获取页面导航对象
                var navPath = document.querySelector('#wrapper #content .contentMain #navPath');
                // console.log(navPath);

                // 获取元素数据
                var path =goodData.path;
                // console.log(path);
                // 便利数据
                for(var i = 0; i < path.length; i++){
                    if (i ==path.length - 1) {
                        var aNode =document.createElement('a');
                        aNOde,href = path[i].url;
                        aNOde.innerText =path[i].title
                        navPath.appendChild(aNode);
                    }else{
                    // 创建a标签
                 

                    // 创建a标签
                    var iNode = document.createElement('i');
                    iNode.innerText = '/';

                    // 让navpath追加
                    navPath.appendChild(aNode);
                    navPath.appendChild(iNode);


                }
}
}