import static org.fest.assertions.Assertions.*;
import static play.test.Helpers.*;
import org.junit.Test;
import play.mvc.Result;
public class RouteTest {
	@Test
	public void testNameResultPost(){
		running(fakeApplication(), new Runnable() {
			@Override
			public void run() {
				Result result = routeAndCall(fakeRequest(POST, "/name"));
				assertThat(result).isNotNull();
			}
		});
	}
	@Test
	public void testNameResultGet(){
		running(fakeApplication(), new Runnable() {
			@Override
			public void run() {
				Result result = routeAndCall(fakeRequest(GET, "/name"));
				assertThat(result).isNull();
			}
		});
	}
}
