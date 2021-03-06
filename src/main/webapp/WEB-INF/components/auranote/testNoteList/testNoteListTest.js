({
    getRowTitle : function(cmp, index) {
        return cmp.find("list").find("row")[index].getSuper().get("v.body")[0].getElement().textContent;
    },

    tearDown : function(cmp) {
        var a = cmp.get("c.deleteNotesByKey");
        a.setParams({ key : cmp.get("m.key") });
        $A.test.callServerAction(a);
    },

    testSortDateAsc:{
        attributes : { sort : "createdOn.asc" },
        test : function(cmp){
            $A.test.assertEquals("created first", this.getRowTitle(cmp, 0));
            $A.test.assertEquals("created second", this.getRowTitle(cmp, 1));
            $A.test.assertEquals("created third", this.getRowTitle(cmp, 2));
            $A.test.assertEquals("created absolutely last", this.getRowTitle(cmp, 3));
        }
    },

    testSortDateDesc:{
        attributes : { sort : "createdOn.desc" },
        test : function(cmp){
            $A.test.assertEquals("created absolutely last", this.getRowTitle(cmp, 0));
            $A.test.assertEquals("created third", this.getRowTitle(cmp, 1));
            $A.test.assertEquals("created second", this.getRowTitle(cmp, 2));
            $A.test.assertEquals("created first", this.getRowTitle(cmp, 3));
        }
    },

    testSortTitleAsc:{
        attributes : { sort : "title.asc" },
        test : function(cmp){
            $A.test.assertEquals("created absolutely last", this.getRowTitle(cmp, 0));
            $A.test.assertEquals("created first", this.getRowTitle(cmp, 1));
            $A.test.assertEquals("created second", this.getRowTitle(cmp, 2));
            $A.test.assertEquals("created third", this.getRowTitle(cmp, 3));
        }
    },

    testSortTitleDesc:{
        attributes : { sort : "title.desc" },
        test : function(cmp){
            $A.test.assertEquals("created third", this.getRowTitle(cmp, 0));
            $A.test.assertEquals("created second", this.getRowTitle(cmp, 1));
            $A.test.assertEquals("created first", this.getRowTitle(cmp, 2));
            $A.test.assertEquals("created absolutely last", this.getRowTitle(cmp, 3));
        }
    }
})
