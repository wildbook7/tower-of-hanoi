import static org.fest.assertions.Assertions.*;
import static play.test.Helpers.*;
import org.junit.Test;
import play.mvc.Content;
public class ViewTest {
	@Test
	public void testNameResultRender() {
		Content html = views.html.name_result.render("太郎");
		String htmlString = contentAsString(html);
		assertThat(htmlString).contains("太郎");
	}
}
