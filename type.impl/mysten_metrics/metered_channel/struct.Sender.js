(function() {var type_impls = {
"sui_indexer_builder":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Sender%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#28\">source</a><a href=\"#impl-Clone-for-Sender%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Sender.html\" title=\"struct mysten_metrics::metered_channel::Sender\">Sender</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#29\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Sender.html\" title=\"struct mysten_metrics::metered_channel::Sender\">Sender</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sui_indexer_builder::indexer_builder::DataSender"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Sender%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#22\">source</a><a href=\"#impl-Debug-for-Sender%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Sender.html\" title=\"struct mysten_metrics::metered_channel::Sender\">Sender</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#22\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sui_indexer_builder::indexer_builder::DataSender"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sender%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#174\">source</a><a href=\"#impl-Sender%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Sender.html\" title=\"struct mysten_metrics::metered_channel::Sender\">Sender</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.send\" class=\"method\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#177\">source</a><h4 class=\"code-header\">pub async fn <a href=\"mysten_metrics/metered_channel/struct.Sender.html#tymethod.send\" class=\"fn\">send</a>(&amp;self, value: T) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, SendError&lt;T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Sends a value, waiting until there is capacity.\nIncrements the gauge in case of a successful <code>send</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.closed\" class=\"method\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#185\">source</a><h4 class=\"code-header\">pub async fn <a href=\"mysten_metrics/metered_channel/struct.Sender.html#tymethod.closed\" class=\"fn\">closed</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Completes when the receiver has dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_send\" class=\"method\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#191\">source</a><h4 class=\"code-header\">pub fn <a href=\"mysten_metrics/metered_channel/struct.Sender.html#tymethod.try_send\" class=\"fn\">try_send</a>(&amp;self, message: T) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, TrySendError&lt;T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to immediately send a message on this <code>Sender</code>\nIncrements the gauge in case of a successful <code>try_send</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_closed\" class=\"method\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#206\">source</a><h4 class=\"code-header\">pub fn <a href=\"mysten_metrics/metered_channel/struct.Sender.html#tymethod.is_closed\" class=\"fn\">is_closed</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Checks if the channel has been closed. This happens when the\n<a href=\"mysten_metrics/metered_channel/struct.Receiver.html\" title=\"struct mysten_metrics::metered_channel::Receiver\"><code>Receiver</code></a> is dropped, or when the <a href=\"mysten_metrics/metered_channel/struct.Receiver.html#method.close\" title=\"method mysten_metrics::metered_channel::Receiver::close\"><code>Receiver::close</code></a> method is\ncalled.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reserve\" class=\"method\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#213\">source</a><h4 class=\"code-header\">pub async fn <a href=\"mysten_metrics/metered_channel/struct.Sender.html#tymethod.reserve\" class=\"fn\">reserve</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Permit.html\" title=\"struct mysten_metrics::metered_channel::Permit\">Permit</a>&lt;'_, T&gt;, SendError&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Waits for channel capacity. Once capacity to send one message is\navailable, it is reserved for the caller.\nIncrements the gauge in case of a successful <code>reserve</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_reserve\" class=\"method\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#229\">source</a><h4 class=\"code-header\">pub fn <a href=\"mysten_metrics/metered_channel/struct.Sender.html#tymethod.try_reserve\" class=\"fn\">try_reserve</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Permit.html\" title=\"struct mysten_metrics::metered_channel::Permit\">Permit</a>&lt;'_, T&gt;, TrySendError&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Tries to acquire a slot in the channel without waiting for the slot to become\navailable.\nIncrements the gauge in case of a successful <code>try_reserve</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.capacity\" class=\"method\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#243\">source</a><h4 class=\"code-header\">pub fn <a href=\"mysten_metrics/metered_channel/struct.Sender.html#tymethod.capacity\" class=\"fn\">capacity</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the current capacity of the channel.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gauge\" class=\"method\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#250\">source</a><h4 class=\"code-header\">pub fn <a href=\"mysten_metrics/metered_channel/struct.Sender.html#tymethod.gauge\" class=\"fn\">gauge</a>(&amp;self) -&gt; &amp;GenericGauge&lt;AtomicI64&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a reference to the underlying gauge.</p>\n</div></details></div></details>",0,"sui_indexer_builder::indexer_builder::DataSender"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sender%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#37\">source</a><a href=\"#impl-Sender%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Sender.html\" title=\"struct mysten_metrics::metered_channel::Sender\">Sender</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.downgrade\" class=\"method\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#38\">source</a><h4 class=\"code-header\">pub fn <a href=\"mysten_metrics/metered_channel/struct.Sender.html#tymethod.downgrade\" class=\"fn\">downgrade</a>(&amp;self) -&gt; <a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.WeakSender.html\" title=\"struct mysten_metrics::metered_channel::WeakSender\">WeakSender</a>&lt;T&gt;</h4></section></div></details>",0,"sui_indexer_builder::indexer_builder::DataSender"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WithPermit%3CT%3E-for-Sender%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#366\">source</a><a href=\"#impl-WithPermit%3CT%3E-for-Sender%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"mysten_metrics/metered_channel/trait.WithPermit.html\" title=\"trait mysten_metrics::metered_channel::WithPermit\">WithPermit</a>&lt;T&gt; for <a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Sender.html\" title=\"struct mysten_metrics::metered_channel::Sender\">Sender</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.with_permit\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mysten_metrics/metered_channel.rs.html#367\">source</a><a href=\"#method.with_permit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mysten_metrics/metered_channel/trait.WithPermit.html#tymethod.with_permit\" class=\"fn\">with_permit</a>&lt;'life0, 'async_trait, F&gt;(\n    &amp;'life0 self,\n    f: F,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Permit.html\" title=\"struct mysten_metrics::metered_channel::Permit\">Permit</a>&lt;'life0, T&gt;, &lt;F as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html#associatedtype.Output\" title=\"type core::future::future::Future::Output\">Output</a>)&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    F: 'async_trait + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Sender.html\" title=\"struct mysten_metrics::metered_channel::Sender\">Sender</a>&lt;T&gt;: 'async_trait,</div></h4></section></div></details>","WithPermit<T>","sui_indexer_builder::indexer_builder::DataSender"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()