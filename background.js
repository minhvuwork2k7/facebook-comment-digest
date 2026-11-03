// File: background.js
/**
 * ============================================================================
 * GIAI ĐOẠN 4 - TỰ CHẠY THỬ TRONG ĐẦU (MENTAL DRY-RUN):
 * 1. Tình huống mới cài đặt hoặc khởi động trình duyệt: Sự kiện onInstalled /
 *    onStartup kích hoạt configureSidePanelBehavior(), gọi
 *    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }) bên trong
 *    khối try/catch an toàn. Khi người dùng bấm icon trên thanh công cụ, Side Panel
 *    mở ra ngay lập tức mà không có lỗi Service Worker.
 * 2. Tình huống bài 800 bình luận chạy mất 4-5 phút: Vì toàn bộ logic đọc bình
 *    luận và gọi Gemini đã đặt ở Side Panel (trang extension sống liên tục khi
 *    còn mở), Service Worker này không giữ tác vụ dài nên KHÔNG BAO GIỜ gặp lỗi
 *    bị Chrome kill sau 5 phút.
 * 3. Tình huống kiểm tra kết nối debug: Khi nhận thông điệp { type: 'PING' },
 *    background trả lời ngay { ok: true, source: 'background' }.
 * ============================================================================
 *
 * VAI TRÒ FILE:
 * Background Service Worker tối giản (Manifest V3).
 * Chỉ thực hiện đúng 2 nhiệm vụ:
 * (1) Cấu hình mở Side Panel khi người dùng bấm vào biểu tượng extension trên toolbar
 *     bằng thuộc tính chuẩn `openPanelOnActionClick: true`.
 * (2) Trả lời bản tin PING để kiểm tra trạng thái hoạt động.
 */

function configureSidePanelBehavior() {
  try {
    if (chrome.sidePanel && typeof chrome.sidePanel.setPanelBehavior === 'function') {
      chrome.sidePanel
        .setPanelBehavior({ openPanelOnActionClick: true })
        .catch((err) => {
          console.warn('[CommentDigest][Background] setPanelBehavior warning:', err);
        });
    }
  } catch (err) {
    console.warn('[CommentDigest][Background] setPanelBehavior sync warning:', err);
  }
}

// Thiết lập ngay khi nạp Service Worker, khi cài đặt mới và khi khởi động Chrome
configureSidePanelBehavior();

chrome.runtime.onInstalled.addListener(() => {
  configureSidePanelBehavior();
});

chrome.runtime.onStartup.addListener(() => {
  configureSidePanelBehavior();
});

// Phản hồi bản tin PING phục vụ kiểm tra chẩn đoán
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message && message.type === 'PING') {
    sendResponse({
      ok: true,
      source: 'background',
      timestamp: Date.now()
    });
    return false;
  }
  return false;
});
