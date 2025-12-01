// Application Data
const appData = {
  departments: [
    {"id": "hr", "name": "Human Resources", "icon": "👥"},
    {"id": "procurement", "name": "Procurement", "icon": "📋"},
    {"id": "it", "name": "IT Support", "icon": "💻"},
    {"id": "finance", "name": "Finance", "icon": "💰"},
    {"id": "admin", "name": "Administration", "icon": "🏛️"},
    {"id": "legal", "name": "Legal", "icon": "⚖️"},
    {"id": "projects", "name": "Project Management", "icon": "📊"}
  ],
  quickActions: [
    {"id": "procurement_process", "text": "Procurement Process", "department": "procurement"},
    {"id": "leave_application", "text": "Leave Application", "department": "hr"},
    {"id": "inter_dept_coord", "text": "Inter-dept Coordination", "department": "admin"},
    {"id": "policy_guidelines", "text": "Policy Guidelines", "department": "admin"},
    {"id": "budget_approval", "text": "Budget Approval", "department": "finance"},
    {"id": "vendor_registration", "text": "Vendor Registration", "department": "procurement"},
    {"id": "system_access", "text": "System Access", "department": "it"},
    {"id": "transfer_procedure", "text": "Transfer Procedure", "department": "hr"}
  ],
  botResponses: {
    "procurement_process": {
      "message": "I'll guide you through the government procurement process:\n\n**Step 1: Requirement Planning**\n• Define specifications and estimated value\n• Get department head approval\n• Check if item is available on GeM marketplace\n\n**Step 2: Tender Process**\n• Draft tender document using standard templates\n• Get legal vetting for contracts >₹1 crore\n• Publish on Central Public Procurement Portal\n\n**Step 3: Evaluation & Award**\n• Technical evaluation by expert committee\n• Financial bid opening for qualified vendors\n• Issue work order to selected vendor\n\n**Required Documents:**\n• Technical specifications\n• Cost estimates\n• Approval from competent authority\n• Vendor empanelment details\n\nWould you like details on any specific step?",
      "followUp": ["GeM marketplace process", "Tender document template", "Vendor evaluation criteria"]
    },
    "inter_dept_coord": {
      "message": "Inter-departmental coordination made easy! Here's how I can help:\n\n**Current Coordination Tools:**\n• Unified project dashboard access\n• Real-time status updates across departments\n• Automated approval workflows\n• Shared document repository\n\n**Common Coordination Scenarios:**\n• Joint project approvals\n• Budget transfers between departments\n• Resource sharing requests\n• Policy implementation across ministries\n\n**Quick Actions:**\n• Connect with other department heads\n• Schedule inter-dept meetings\n• Share project timelines\n• Request budget reallocations\n\n**Success Metrics:**\n• 60% faster approval cycles\n• 75% reduction in coordination emails\n• Real-time project visibility\n\nWhich department do you need to coordinate with?",
      "followUp": ["Connect with specific department", "Schedule coordination meeting", "Share project status"]
    },
    "leave_application": {
      "message": "Leave application process simplified:\n\n**Types of Leave Available:**\n• Casual Leave: 12 days per year\n• Earned Leave: 30 days per year\n• Medical Leave: As per medical certificate\n• Maternity/Paternity Leave: As per rules\n\n**Application Process:**\n1. Fill online leave application form\n2. Upload supporting documents (if required)\n3. Get supervisor approval\n4. HR department final approval\n5. Leave credited to your account\n\n**Processing Time:**\n• Regular leave: 2-3 working days\n• Medical leave: 5-7 working days\n• Special leave: 7-10 working days\n\n**Quick Links:**\n• Online leave portal\n• Leave balance checker\n• Holiday calendar\n• Leave policy document\n\nWould you like to start a leave application now?",
      "followUp": ["Check leave balance", "Apply for casual leave", "Apply for earned leave", "Medical leave process"]
    },
    "budget_approval": {
      "message": "Budget approval workflow assistance:\n\n**Approval Hierarchy:**\n• Up to ₹1 lakh: Department Head\n• ₹1-10 lakhs: Joint Secretary\n• ₹10 lakhs-1 crore: Additional Secretary\n• Above ₹1 crore: Secretary + Finance Ministry\n\n**Required Documents:**\n• Detailed budget proposal\n• Justification note\n• Cost-benefit analysis\n• Previous year's expenditure data\n• Vendor quotations (if applicable)\n\n**Processing Timeline:**\n• Department level: 3-5 days\n• Ministry level: 7-10 days\n• Inter-ministry: 15-20 days\n\n**Tracking Features:**\n• Real-time approval status\n• Automated reminders to approvers\n• Document version control\n• Audit trail maintenance\n\nWhat's your budget request amount?",
      "followUp": ["Submit budget proposal", "Check approval status", "Contact finance team"]
    },
    "system_access": {
      "message": "IT System Access Support:\n\n**Available Systems:**\n• Employee Portal (HRMS)\n• Financial Management System\n• Procurement Portal (GeM)\n• Document Management System\n• Video Conferencing Platform\n• Email & Collaboration Tools\n\n**Access Request Process:**\n1. Fill IT access request form\n2. Get supervisor approval\n3. IT security clearance\n4. Account creation & credentials\n5. System training (if required)\n\n**Processing Time:**\n• Standard systems: 2-3 days\n• Sensitive systems: 5-7 days\n• External access: 7-10 days\n\n**Common Issues:**\n• Password reset: Immediate\n• Account unlock: 2-4 hours\n• New software request: 1-2 weeks\n• VPN access: 3-5 days\n\nWhat system access do you need?",
      "followUp": ["Reset password", "Request new system access", "Report technical issue"]
    },
    "policy_guidelines": {
      "message": "Policy Guidelines and Compliance Support:\n\n**Available Policy Documents:**\n• Employee Code of Conduct\n• Financial Rules and Procedures\n• Procurement Guidelines\n• IT Security Policies\n• Leave and Attendance Rules\n• RTI Compliance Guidelines\n\n**Quick Policy Lookups:**\n• Travel allowance rates\n• Overtime calculation rules\n• Document retention policies\n• Conflict of interest guidelines\n\n**Compliance Checklist:**\n• Annual declarations submitted\n• Training certifications current\n• System access reviews completed\n• Document approvals up to date\n\nWhich policy area do you need guidance on?",
      "followUp": ["Travel policies", "Financial compliance", "Ethics guidelines"]
    },
    "vendor_registration": {
      "message": "Vendor Registration Process:\n\n**Registration Categories:**\n• Goods Suppliers\n• Service Providers\n• Works Contractors\n• Consultancy Services\n\n**Required Documents:**\n• Business registration certificates\n• PAN and GST certificates\n• Bank account details\n• Experience certificates\n• Financial statements (3 years)\n• Technical capability certificates\n\n**Registration Process:**\n1. Online application submission\n2. Document verification\n3. Technical evaluation\n4. Financial assessment\n5. Site inspection (if required)\n6. Empanelment approval\n\n**Processing Time:** 15-30 working days\n\nWhich vendor category do you need help with?",
      "followUp": ["Submit vendor application", "Track registration status", "Update vendor details"]
    },
    "transfer_procedure": {
      "message": "Employee Transfer Procedure:\n\n**Transfer Types:**\n• Administrative transfers\n• Promotional transfers\n• Request transfers\n• Disciplinary transfers\n\n**Application Process:**\n1. Submit transfer request form\n2. Get current supervisor approval\n3. Receiving department confirmation\n4. HR processing and approval\n5. Release and joining formalities\n\n**Required Documents:**\n• Transfer request application\n• Service records\n• Medical fitness certificate\n• No objection certificate\n• Asset handover certificate\n\n**Processing Timeline:**\n• Within department: 15-30 days\n• Inter-department: 30-45 days\n• Inter-state: 45-60 days\n\nWhat type of transfer are you looking for?",
      "followUp": ["Submit transfer request", "Check transfer status", "Transfer guidelines"]
    }
  },
  defaultMessages: {
    "welcome": "Welcome to the Government Employee Helpdesk! 👋\n\nI'm your AI assistant, ready to help you with:\n• Procurement processes and vendor management\n• HR queries and leave applications\n• Inter-departmental coordination\n• IT support and system access\n• Budget approvals and financial procedures\n• Policy guidelines and compliance\n\nSelect your department above and choose a quick action, or type your question below.",
    "unknown": "I understand you're looking for help with that query. While I'm continuously learning, I may not have specific information on this topic yet.\n\n**Here's what I can do:**\n• Connect you with the relevant department expert\n• Escalate to human support\n• Schedule a callback\n• Provide general policy guidelines\n\nWould you like me to connect you with a human agent for specialized assistance?",
    "escalation": "I'm connecting you with a human agent who can provide specialized assistance. \n\n**Escalation Details:**\n• Queue position: 2nd in line\n• Estimated wait time: 5-7 minutes\n• Agent expertise: Government processes\n• Reference ID: GH-2025-090625\n\nYour chat history has been shared with the agent for context."
  }
};

// Application State
let currentDepartment = '';
let chatHistory = [];
let isTyping = false;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing application...');
  
  // Wait a moment for all elements to be ready
  setTimeout(() => {
    initializeApp();
  }, 100);
});

function initializeApp() {
  console.log('Starting app initialization...');
  
  populateDepartments();
  populateQuickActions();
  setupAllEventListeners();
  showWelcomeMessage();
  
  console.log('App initialization complete');
}

function setupAllEventListeners() {
  console.log('Setting up all event listeners...');

  // Message sending functionality
  const sendBtn = document.getElementById('sendBtn');
  const messageInput = document.getElementById('messageInput');
  
  if (sendBtn) {
    sendBtn.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Send button clicked via onclick');
      sendMessage();
      return false;
    };
    console.log('Send button onclick handler attached');
  } else {
    console.error('Send button not found!');
  }

  if (messageInput) {
    messageInput.onkeypress = function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        console.log('Enter key pressed in message input');
        sendMessage();
      }
    };
    console.log('Message input keypress handler attached');
  } else {
    console.error('Message input not found!');
  }

  // Department selection
  const departmentSelect = document.getElementById('department');
  if (departmentSelect) {
    departmentSelect.onchange = function(e) {
      currentDepartment = e.target.value;
      console.log('Department changed to:', currentDepartment);
      filterQuickActions(currentDepartment);
      if (currentDepartment) {
        addMessage('bot', `Great! I see you've selected ${getDepartmentName(currentDepartment)}. How can I assist you today?`);
      }
    };
    console.log('Department select handler attached');
  } else {
    console.error('Department select not found!');
  }

  // Export functionality
  const exportBtn = document.getElementById('exportChat');
  if (exportBtn) {
    exportBtn.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Export button clicked via onclick');
      exportChatHistory();
      return false;
    };
    console.log('Export button onclick handler attached');
  } else {
    console.error('Export button not found!');
  }

  // Human Support / Escalation
  const escalateBtn = document.getElementById('escalateBtn');
  if (escalateBtn) {
    escalateBtn.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Escalate button clicked via onclick');
      showEscalationModal();
      return false;
    };
    console.log('Escalate button onclick handler attached');
  } else {
    console.error('Escalate button not found!');
  }

  // Language toggle
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.onclick = function(e) {
      e.preventDefault();
      alert('Language switching feature will be available in the next version. Currently supporting English.');
    };
  }

  // Search functionality
  const searchToggle = document.getElementById('searchToggle');
  if (searchToggle) {
    searchToggle.onclick = function(e) {
      e.preventDefault();
      toggleSearch();
    };
  }

  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.onclick = function(e) {
      e.preventDefault();
      searchMessages();
    };
  }

  const clearSearch = document.getElementById('clearSearch');
  if (clearSearch) {
    clearSearch.onclick = function(e) {
      e.preventDefault();
      clearSearchFn();
    };
  }

  // Voice and attach buttons
  const voiceBtn = document.getElementById('voiceBtn');
  if (voiceBtn) {
    voiceBtn.onclick = function(e) {
      e.preventDefault();
      alert('Voice input feature coming soon!');
    };
  }

  const attachBtn = document.getElementById('attachBtn');
  if (attachBtn) {
    attachBtn.onclick = function(e) {
      e.preventDefault();
      alert('File attachment feature coming soon!');
    };
  }

  // Modal event listeners
  setupModalEventListeners();

  console.log('All event listeners setup complete');
}

function setupModalEventListeners() {
  // Rating modal
  const closeRatingModal = document.getElementById('closeRatingModal');
  if (closeRatingModal) {
    closeRatingModal.onclick = function() { hideRatingModal(); };
  }

  const skipRating = document.getElementById('skipRating');
  if (skipRating) {
    skipRating.onclick = function() { hideRatingModal(); };
  }

  const submitRating = document.getElementById('submitRating');
  if (submitRating) {
    submitRating.onclick = function() { submitRatingFn(); };
  }

  // Escalation modal
  const closeEscalationModal = document.getElementById('closeEscalationModal');
  if (closeEscalationModal) {
    closeEscalationModal.onclick = function() { hideEscalationModal(); };
  }

  const cancelEscalation = document.getElementById('cancelEscalation');
  if (cancelEscalation) {
    cancelEscalation.onclick = function() { hideEscalationModal(); };
  }

  const connectAgent = document.getElementById('connectAgent');
  if (connectAgent) {
    connectAgent.onclick = function() { connectWithAgent(); };
  }

  // Rating stars
  document.querySelectorAll('.star').forEach(star => {
    star.onclick = function() {
      const rating = this.dataset.rating;
      updateStarRating(rating);
    };
  });

  // Close modals when clicking outside
  document.onclick = function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.classList.add('hidden');
    }
  };
}

function populateDepartments() {
  const select = document.getElementById('department');
  if (!select) {
    console.error('Department select element not found');
    return;
  }
  
  appData.departments.forEach(dept => {
    const option = document.createElement('option');
    option.value = dept.id;
    option.textContent = `${dept.icon} ${dept.name}`;
    select.appendChild(option);
  });
  console.log('Departments populated successfully');
}

function populateQuickActions() {
  const grid = document.getElementById('quickActionsGrid');
  if (!grid) {
    console.error('Quick actions grid not found');
    return;
  }
  
  appData.quickActions.forEach(action => {
    const button = document.createElement('button');
    button.className = 'quick-action-btn';
    button.textContent = action.text;
    button.dataset.actionId = action.id;
    button.dataset.department = action.department;
    button.onclick = function() {
      console.log('Quick action clicked:', action.id);
      handleQuickAction(action.id, action.text);
    };
    grid.appendChild(button);
  });
  console.log('Quick actions populated successfully');
}

function filterQuickActions(departmentId) {
  const grid = document.getElementById('quickActionsGrid');
  if (!grid) return;
  
  const buttons = grid.querySelectorAll('.quick-action-btn');
  buttons.forEach(button => {
    const buttonDept = button.dataset.department;
    if (!departmentId || buttonDept === departmentId) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
}

function showWelcomeMessage() {
  addMessage('bot', appData.defaultMessages.welcome);
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  if (!messageInput) {
    console.error('Message input not found');
    return;
  }

  const message = messageInput.value.trim();
  if (!message) {
    console.log('No message to send');
    return;
  }

  console.log('Sending message:', message);
  addMessage('user', message);
  messageInput.value = '';

  // Simulate bot response
  showTypingIndicator();
  setTimeout(() => {
    handleBotResponse(message);
    hideTypingIndicator();
  }, 1500);
}

function handleQuickAction(actionId, actionText) {
  console.log('Handling quick action:', actionId, actionText);
  addMessage('user', actionText);
  
  showTypingIndicator();
  setTimeout(() => {
    const response = appData.botResponses[actionId];
    if (response) {
      addMessage('bot', response.message, response.followUp);
    } else {
      addMessage('bot', appData.defaultMessages.unknown);
    }
    hideTypingIndicator();
  }, 1000);
}

function handleBotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  let response = appData.defaultMessages.unknown;
  let followUp = null;

  console.log('Processing user message:', userMessage);

  // Simple keyword matching for demo
  if (lowerMessage.includes('procurement') || lowerMessage.includes('tender')) {
    response = appData.botResponses.procurement_process.message;
    followUp = appData.botResponses.procurement_process.followUp;
  } else if (lowerMessage.includes('leave') || lowerMessage.includes('holiday')) {
    response = appData.botResponses.leave_application.message;
    followUp = appData.botResponses.leave_application.followUp;
  } else if (lowerMessage.includes('budget') || lowerMessage.includes('approval')) {
    response = appData.botResponses.budget_approval.message;
    followUp = appData.botResponses.budget_approval.followUp;
  } else if (lowerMessage.includes('system') || lowerMessage.includes('access') || lowerMessage.includes('password')) {
    response = appData.botResponses.system_access.message;
    followUp = appData.botResponses.system_access.followUp;
  } else if (lowerMessage.includes('policy') || lowerMessage.includes('guidelines')) {
    response = appData.botResponses.policy_guidelines.message;
    followUp = appData.botResponses.policy_guidelines.followUp;
  } else if (lowerMessage.includes('vendor') || lowerMessage.includes('registration')) {
    response = appData.botResponses.vendor_registration.message;
    followUp = appData.botResponses.vendor_registration.followUp;
  } else if (lowerMessage.includes('transfer') || lowerMessage.includes('posting')) {
    response = appData.botResponses.transfer_procedure.message;
    followUp = appData.botResponses.transfer_procedure.followUp;
  } else if (lowerMessage.includes('coordination') || lowerMessage.includes('department')) {
    response = appData.botResponses.inter_dept_coord.message;
    followUp = appData.botResponses.inter_dept_coord.followUp;
  } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
    response = "You're welcome! I'm here to help with any government processes or procedures. Is there anything else you'd like to know about?";
  } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    response = "Hello! I'm here to help with government processes and procedures. You can ask me about procurement, HR policies, IT support, budget approvals, and much more. What can I assist you with today?";
  }

  addMessage('bot', response, followUp);

  // Show rating modal for bot responses (occasionally)
  if (Math.random() < 0.3) {
    setTimeout(showRatingModal, 2000);
  }
}

function addMessage(sender, text, followUpActions = null) {
  const chatMessages = document.getElementById('chatMessages');
  if (!chatMessages) {
    console.error('Chat messages container not found');
    return;
  }

  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;

  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = sender === 'user' ? '👤' : '🤖';

  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';

  const textDiv = document.createElement('div');
  textDiv.className = 'message-text';
  textDiv.textContent = text;

  const timeDiv = document.createElement('div');
  timeDiv.className = 'message-time';
  timeDiv.textContent = new Date().toLocaleTimeString();

  contentDiv.appendChild(textDiv);
  contentDiv.appendChild(timeDiv);

  if (sender === 'bot') {
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'message-actions';
    
    const likeBtn = document.createElement('button');
    likeBtn.className = 'message-action-btn';
    likeBtn.textContent = '👍';
    likeBtn.onclick = function() { showRatingModal(); };
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'message-action-btn';
    copyBtn.textContent = '📋';
    copyBtn.onclick = function() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          alert('Message copied to clipboard!');
        }).catch(() => {
          // Fallback for older browsers
          const textarea = document.createElement('textarea');
          textarea.value = text;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          alert('Message copied to clipboard!');
        });
      }
    };
    
    actionsDiv.appendChild(likeBtn);
    actionsDiv.appendChild(copyBtn);
    contentDiv.appendChild(actionsDiv);
  }

  messageDiv.appendChild(avatar);
  messageDiv.appendChild(contentDiv);

  chatMessages.appendChild(messageDiv);

  // Add follow-up actions if provided
  if (followUpActions && followUpActions.length > 0) {
    const followUpDiv = document.createElement('div');
    followUpDiv.className = 'follow-up-actions';
    
    followUpActions.forEach(action => {
      const btn = document.createElement('button');
      btn.className = 'follow-up-btn';
      btn.textContent = action;
      btn.onclick = function() {
        addMessage('user', action);
        showTypingIndicator();
        setTimeout(() => {
          handleBotResponse(action);
          hideTypingIndicator();
        }, 1000);
      };
      followUpDiv.appendChild(btn);
    });
    
    chatMessages.appendChild(followUpDiv);
  }

  // Store in chat history
  chatHistory.push({
    sender,
    text,
    timestamp: new Date(),
    followUp: followUpActions
  });

  scrollToBottom();
}

function showTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (!isTyping && typingIndicator) {
    isTyping = true;
    typingIndicator.classList.remove('hidden');
    scrollToBottom();
  }
}

function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
    isTyping = false;
    typingIndicator.classList.add('hidden');
  }
}

function scrollToBottom() {
  const chatMessages = document.getElementById('chatMessages');
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function toggleSearch() {
  const searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.classList.toggle('hidden');
    const searchInput = document.getElementById('searchInput');
    if (!searchBar.classList.contains('hidden') && searchInput) {
      searchInput.focus();
    }
  }
}

function searchMessages() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput?.value?.toLowerCase()?.trim();
  if (!query) return;

  const chatMessages = document.getElementById('chatMessages');
  const messages = chatMessages?.querySelectorAll('.message');
  if (!messages) return;
  
  let found = false;

  messages.forEach(message => {
    const textElement = message.querySelector('.message-text');
    if (textElement) {
      const text = textElement.textContent.toLowerCase();
      if (text.includes(query)) {
        message.style.backgroundColor = 'var(--color-bg-2)';
        message.scrollIntoView({ behavior: 'smooth', block: 'center' });
        found = true;
      } else {
        message.style.backgroundColor = '';
      }
    }
  });

  if (!found) {
    alert('No messages found matching your search.');
  }
}

function clearSearchFn() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
  }
  
  const chatMessages = document.getElementById('chatMessages');
  const messages = chatMessages?.querySelectorAll('.message');
  if (messages) {
    messages.forEach(message => {
      message.style.backgroundColor = '';
    });
  }
  
  const searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.classList.add('hidden');
  }
}

function exportChatHistory() {
  console.log('Exporting chat history...');
  
  if (chatHistory.length === 0) {
    alert('No chat history to export yet. Start a conversation first!');
    return;
  }

  let exportText = 'Government Employee Helpdesk - Chat Export\n';
  exportText += '='.repeat(50) + '\n';
  exportText += `Generated on: ${new Date().toLocaleString()}\n`;
  exportText += `Department: ${getDepartmentName(currentDepartment) || 'Not selected'}\n`;
  exportText += `Total Messages: ${chatHistory.length}\n\n`;

  chatHistory.forEach((msg, index) => {
    const sender = msg.sender === 'user' ? 'You' : 'AI Assistant';
    exportText += `${index + 1}. [${msg.timestamp.toLocaleTimeString()}] ${sender}:\n${msg.text}\n\n`;
  });

  try {
    const blob = new Blob([exportText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `govt-helpdesk-chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log('Export completed successfully');
    alert('Chat history exported successfully!');
  } catch (error) {
    console.error('Export failed:', error);
    alert('Export failed. Please try again.');
  }
}

function showRatingModal() {
  const ratingModal = document.getElementById('ratingModal');
  if (ratingModal) {
    ratingModal.classList.remove('hidden');
  }
}

function hideRatingModal() {
  const ratingModal = document.getElementById('ratingModal');
  if (ratingModal) {
    ratingModal.classList.add('hidden');
    resetStarRating();
  }
}

function updateStarRating(rating) {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function resetStarRating() {
  document.querySelectorAll('.star').forEach(star => star.classList.remove('active'));
  const feedbackText = document.getElementById('feedbackText');
  if (feedbackText) {
    feedbackText.value = '';
  }
}

function submitRatingFn() {
  const rating = document.querySelectorAll('.star.active').length;
  const feedbackText = document.getElementById('feedbackText');
  const feedback = feedbackText ? feedbackText.value : '';
  
  alert(`Thank you for your rating: ${rating} stars${feedback ? '\nFeedback: ' + feedback : ''}`);
  hideRatingModal();
}

function showEscalationModal() {
  console.log('Showing escalation modal');
  const escalationModal = document.getElementById('escalationModal');
  if (escalationModal) {
    escalationModal.classList.remove('hidden');
    console.log('Escalation modal shown successfully');
  } else {
    console.error('Escalation modal element not found');
    alert('Unable to open escalation modal. Please try refreshing the page.');
  }
}

function hideEscalationModal() {
  const escalationModal = document.getElementById('escalationModal');
  if (escalationModal) {
    escalationModal.classList.add('hidden');
  }
}

function connectWithAgent() {
  const prioritySelect = document.getElementById('prioritySelect');
  const issueSummary = document.getElementById('issueSummary');
  
  const priority = prioritySelect ? prioritySelect.value : 'medium';
  const summary = issueSummary ? issueSummary.value : '';
  
  console.log('Connecting with agent - Priority:', priority, 'Summary:', summary);
  
  hideEscalationModal();
  addMessage('bot', appData.defaultMessages.escalation);
  
  // Clear form
  if (prioritySelect) prioritySelect.value = 'low';
  if (issueSummary) issueSummary.value = '';
}

function getDepartmentName(deptId) {
  const dept = appData.departments.find(d => d.id === deptId);
  return dept ? dept.name : '';
}