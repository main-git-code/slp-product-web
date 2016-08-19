<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <!--左侧菜单-->
    <div id="nav-col">
    <section id="col-left" class="col-left-nano">
        <div id="col-left-inner" class="col-left-nano-content">
            <div class="collapse navbar-collapse navbar-ex1-collapse" id="sidebar-nav">
                <ul class="nav nav-pills nav-stacked">
                    <li class="active"><a href="#"><i class="fa fa-home"></i><span>系统控制台</span>
                        <!--<span class="label label-info label-circle pull-right">28</span>--></a></li>
                    <li>
                        <a href="#" class="dropdown-toggle">
                            <i class="fa fa-shopping-cart"></i><span>类目属性管理</span>
                            <i class="fa fa-chevron-circle-right drop-icon"></i>
                        </a>
                        <!--二级菜单-->
                        <ul class="submenu">
                            <li><a href="${_base}/attr/attrList" target="mainFrame">属性及属性值管理</a></li>
                            <li><a href="${_base}/cat/query/" target="mainFrame">类目管理</a></li>
                            <%--<li><a href="${_base}/cat/edit/addview/" target="mainFrame">类目添加</a></li>--%>
                        </ul>
                        <!--二级菜单结束-->
                    </li>
                    <li>
                        <a href="#" class="dropdown-toggle">
                            <i class="fa fa-inbox"></i>
                            <span>标准品管理</span>
                            <i class="fa fa-chevron-circle-right drop-icon"></i>
                        </a>
                        <!--二级菜单-->
                        <ul class="submenu">
                            <li><a href="${_base}/normprodquery/list" target="mainFrame">标准品列表</a></li>
                            <li><a href="#">新建路由</a></li>
                            <li><a href="#">添加路由规则</a></li>
                            <li><a href="#">新增预警接收人</a></li>
                        </ul>
                        <!--二级菜单结束-->
                    </li>
                    <li>
                        <a href="#" class="dropdown-toggle">
                            <i class="fa fa-paste"></i>
                            <span>库存管理</span>
                            <i class="fa fa-chevron-circle-right drop-icon"></i>
                        </a>
                        <!--二级菜单-->
                        <ul class="submenu">
                            <li><a href="${_base}/storage/list" target="mainFrame">商品列表</a></li>
                        </ul>
                        <!--二级菜单结束-->
                    </li>
                    <li>
                        <a href="#" class="dropdown-toggle">
                            <i class="fa fa-usd"></i>
                            <span>结算管理</span><i class="fa fa-chevron-circle-right drop-icon"></i>
                        </a>
                        <!--二级菜单-->
                        <ul class="submenu">
                            <li><a href="#">路由添加成本价-编辑价格</a></li>
                            <li><a href="#">路由添加成本价</a></li>
                        </ul>
                        <!--二级菜单结束-->
                    </li>
                    <li>
                        <a href="#" class="dropdown-toggle">
                            <i class="fa fa-usd"></i>
                            <span>商品设置管理</span><i class="fa fa-chevron-circle-right drop-icon"></i>
                        </a>
                        <!--二级菜单-->
                        <ul class="submenu">
                            <li><a href="${_base}/prodquery/add" target="mainFrame">待编辑列表</a></li>
                            <li><a href="#">路由添加成本价</a></li>
                        </ul>
                        <!--二级菜单结束-->
                    </li>
                    <li>
                        <a href="#" class="dropdown-toggle">
                            <i class="fa fa-usd"></i>
                            <span>商品审核管理</span><i class="fa fa-chevron-circle-right drop-icon"></i>
                        </a>
                        <!--二级菜单-->
                        <ul class="submenu">
                            <li><a href="#">待编辑列表</a></li>
                            <li><a href="#">路由添加成本价</a></li>
                        </ul>
                        <!--二级菜单结束-->
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </div>
    <!--/左侧菜单结束-->