package controllers;

import java.util.*;

import play.*;
import play.i18n.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public static Result changeLanguage() {
        if ("en".equals(session("lang"))) {
            session("lang", "ja");
        } else {
            session("lang", "en");
        }
        return redirect("/");
    }

    public static Result index() {
        if (session("lang") == null) {
            // セッションへの格納
            session("lang", request().acceptLanguages().get(0).code());
        }
        return ok(index.render(session("lang")));
    }

    public static Result index_coffeescript() {
        return ok(index_coffeescript.render());
    }

}
