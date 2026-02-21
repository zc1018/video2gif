import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="text-page">
      <h1>隐私政策</h1>
      <p className="text-muted">最后更新：2025 年 1 月</p>

      <p>
        本隐私政策说明 Video2GIF（以下简称"本工具"）如何收集、使用和保护你的信息。
        使用本工具即表示你同意本政策的条款。
      </p>

      <h2>1. 信息收集</h2>
      <p>本工具可能收集以下信息：</p>
      <ul>
        <li><strong>上传的文件：</strong>你上传的视频文件仅用于生成 GIF，处理完成后会自动从服务器删除。</li>
        <li><strong>使用数据：</strong>我们可能收集匿名的使用统计数据（如访问量、功能使用频率），用于改善产品体验。</li>
        <li><strong>日志数据：</strong>服务器可能记录标准的访问日志，包括 IP 地址、浏览器类型和访问时间。</li>
      </ul>

      <h2>2. 信息使用</h2>
      <p>收集的信息仅用于：</p>
      <ul>
        <li>提供视频转 GIF 服务</li>
        <li>改善工具性能和用户体验</li>
        <li>分析使用趋势（匿名数据）</li>
      </ul>

      <h2>3. 文件存储</h2>
      <p>
        上传的视频文件和生成的 GIF 文件仅在服务器上临时存储，用于完成转换任务。
        文件会在处理完成后或 2 小时内自动删除，不会永久保存。
      </p>

      <h2>4. Cookie 和追踪</h2>
      <p>
        本工具可能使用 Cookie 和类似技术来改善用户体验，以及通过 Google AdSense 展示相关广告。
        Google 可能使用 Cookie 根据你的访问记录展示个性化广告。
        你可以通过浏览器设置管理 Cookie 偏好，或访问
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', margin: '0 4px' }}>
          Google 广告设置
        </a>
        选择退出个性化广告。
      </p>

      <h2>5. 第三方服务</h2>
      <p>本工具可能使用以下第三方服务：</p>
      <ul>
        <li><strong>Google AdSense：</strong>用于展示广告，Google 的隐私政策适用于其数据收集行为。</li>
        <li><strong>Google Analytics：</strong>用于分析网站流量（如已启用）。</li>
      </ul>

      <h2>6. 数据安全</h2>
      <p>
        我们采取合理的技术措施保护你的数据安全。但请注意，互联网传输不能保证 100% 安全，
        请勿上传包含敏感个人信息的视频文件。
      </p>

      <h2>7. 未成年人</h2>
      <p>本工具不面向 13 岁以下的未成年人，我们不会故意收集未成年人的个人信息。</p>

      <h2>8. 政策更新</h2>
      <p>我们可能不定期更新本隐私政策。更新后的政策将在本页面发布，请定期查看。</p>

      <h2>9. 联系我们</h2>
      <p>如对本隐私政策有任何疑问，请通过网站联系方式与我们联系。</p>
    </div>
  );
}
