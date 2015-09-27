import static org.fest.assertions.Assertions.*;
import org.fest.assertions.StringAssert;
import org.junit.Test;
public class SimpleTest {
	@Test
	public void simpleTest() {
		String str = "hoge";
		StringAssert assertion = assertThat(str);
		assertion.isEqualTo("hoge");
	}
}
