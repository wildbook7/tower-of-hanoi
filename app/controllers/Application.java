package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("アプリ作成中です。"));
    }

    public static Result index_coffeescript() {
        return ok(index_coffeescript.render());
    }

}
