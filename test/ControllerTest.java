import static org.fest.assertions.Assertions.*;
import static play.mvc.Http.Status.*;
import static play.test.Helpers.*;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;

import play.mvc.Result;
public class ControllerTest {
	@Test
	public void testShowNameResultBadResuestNoForm() {
		running(fakeApplication(), new Runnable() {
			@Override
			public void run() {
				Result result = callAction(
					controllers.routes.ref.Uranai.showNameResult()
				);
				assertThat(status(result)).isEqualTo(BAD_REQUEST);
			}
		});
	}

	@Test
	public void testShowNameResultOk() {
		running(fakeApplication(), new Runnable() {
			@Override
			public void run() {
				Map<String,String> formValue = new HashMap<String,String>();
				formValue.put("name", "太郎");
				Result result = callAction(
					controllers.routes.ref.Uranai.showNameResult(),
					fakeRequest().withFormUrlEncodedBody(formValue));
				assertThat(status(result)).isEqualTo(OK);
			}
		});
	}
}
